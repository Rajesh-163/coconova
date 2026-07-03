package com.coconova.api;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ContactController {

    private final ContactRepository repository;

    // Simple shared-secret to view submissions. Set ADMIN_KEY env var in deployment.
    @Value("${ADMIN_KEY:changeme}")
    private String adminKey;

    public ContactController(ContactRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of("status", "ok", "service", "coconova-api");
    }

    @PostMapping("/contact")
    public ResponseEntity<?> submitContact(@Valid @RequestBody ContactMessage message) {
        ContactMessage saved = repository.save(message);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(Map.of("id", saved.getId(), "status", "received"));
    }

    // Simple protected view of submissions, e.g. GET /api/contact?key=YOUR_ADMIN_KEY
    @GetMapping("/contact")
    public ResponseEntity<?> listContacts(@RequestParam(required = false) String key) {
        if (key == null || !key.equals(adminKey)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Missing or invalid key"));
        }
        List<ContactMessage> all = repository.findAll();
        return ResponseEntity.ok(all);
    }
}
