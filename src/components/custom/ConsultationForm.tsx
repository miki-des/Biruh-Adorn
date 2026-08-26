"use client";

import React, { useState } from "react";
import { generateWhatsAppUrl, ConsultationPayload } from "../../lib/whatsapp";
import { Typography } from "../ui/Typography";
import styles from "./ConsultationForm.module.css";

export function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "validating" | "redirecting">("idle");
  const [formData, setFormData] = useState<ConsultationPayload>({
    name: "",
    phone: "",
    jewelryType: "Ring",
    idea: "",
    materials: "",
    stone: "",
    size: "",
    additionalDetails: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationPayload, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof ConsultationPayload]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("validating");

    const newErrors: Partial<Record<keyof ConsultationPayload, string>> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "WhatsApp number is required";
    if (!formData.idea.trim()) newErrors.idea = "Please share a brief idea";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("idle");
      return;
    }

    setStatus("redirecting");
    
    // Allow React state to update UI before redirecting
    setTimeout(() => {
      // Build clean payload without empty strings
      const payload: ConsultationPayload = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        jewelryType: formData.jewelryType,
        idea: formData.idea.trim(),
      };
      if (formData.materials?.trim()) payload.materials = formData.materials.trim();
      if (formData.stone?.trim()) payload.stone = formData.stone.trim();
      if (formData.size?.trim()) payload.size = formData.size.trim();
      if (formData.additionalDetails?.trim()) payload.additionalDetails = formData.additionalDetails.trim();

      const whatsappUrl = generateWhatsAppUrl("custom", payload);
      window.open(whatsappUrl, "_blank");
      
      // Reset state so form is usable when they return
      setStatus("idle");
    }, 1500);
  };

  if (status === "redirecting") {
    return (
      <div className={styles.redirectingState} role="alert" aria-live="polite">
        <div className={styles.spinner} aria-hidden="true" />
        <Typography variant="h4" as="p">Opening WhatsApp...</Typography>
        <Typography variant="body" className={styles.redirectText}>
          You can securely share images and continue your consultation there.
        </Typography>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.fieldGroup}>
        <label htmlFor="name" className={styles.label}>Name *</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange}
          className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && <span id="name-error" className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="phone" className={styles.label}>WhatsApp / Phone *</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange}
          className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && <span id="phone-error" className={styles.error}>{errors.phone}</span>}
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="jewelryType" className={styles.label}>Jewelry Type</label>
        <select 
          id="jewelryType" 
          name="jewelryType" 
          value={formData.jewelryType} 
          onChange={handleChange}
          className={styles.select}
        >
          <option value="Ring">Ring</option>
          <option value="Necklace">Necklace</option>
          <option value="Bracelet">Bracelet</option>
          <option value="Earrings">Earrings</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="idea" className={styles.label}>Design Idea *</label>
        <textarea 
          id="idea" 
          name="idea" 
          value={formData.idea} 
          onChange={handleChange}
          rows={4}
          className={`${styles.textarea} ${errors.idea ? styles.inputError : ""}`}
          aria-invalid={!!errors.idea}
          aria-describedby={errors.idea ? "idea-error" : undefined}
        />
        {errors.idea && <span id="idea-error" className={styles.error}>{errors.idea}</span>}
      </div>

      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label htmlFor="materials" className={styles.label}>Material Preference (Optional)</label>
          <input 
            type="text" 
            id="materials" 
            name="materials" 
            value={formData.materials} 
            onChange={handleChange}
            className={styles.input}
            placeholder="e.g. Copper, Stainless Steel"
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="stone" className={styles.label}>Stone Preference (Optional)</label>
          <input 
            type="text" 
            id="stone" 
            name="stone" 
            value={formData.stone} 
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="size" className={styles.label}>Size (Optional)</label>
        <input 
          type="text" 
          id="size" 
          name="size" 
          value={formData.size} 
          onChange={handleChange}
          className={styles.input}
          placeholder="Ring size, necklace length, etc."
        />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="additionalDetails" className={styles.label}>Additional Details (Optional)</label>
        <textarea 
          id="additionalDetails" 
          name="additionalDetails" 
          value={formData.additionalDetails} 
          onChange={handleChange}
          rows={2}
          className={styles.textarea}
        />
      </div>

      <div className={styles.submitWrapper}>
        <button type="submit" className={styles.submitBtn} disabled={status === "validating"}>
          Continue to WhatsApp
        </button>
      </div>
    </form>
  );
}
