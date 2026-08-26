# Conversion Architecture

Biruh Adorn does not use a traditional shopping cart. Conversion is strictly defined as initiating a high-intent conversation on WhatsApp.

## The WhatsApp Utility (`src/lib/whatsapp.ts`)
The entire conversion architecture hinges on `generateWhatsAppUrl()`. It takes a type (`"general" | "product" | "custom" | "contact"`) and a payload to generate a URL-encoded `wa.me` deep link.

## 1. Product Inquiries (The Primary Flow)
- **Trigger:** A user clicks a product in the `/jewelry` gallery.
- **Location:** The Product Modal.
- **Action:** Clicking the large green "Order on WhatsApp" button.
- **Data Passed:** The product's `name` and `reference` number.
- **Output:** Opens WhatsApp with: *"Hello Biruh Adorn, I am interested in [Product Name], Ref. [Reference]. Please provide availability and ordering details."*

## 2. Custom Consultations (The High-Value Flow)
- **Trigger:** A user visits `/custom` and fills out the consultation form.
- **Location:** `ConsultationForm.tsx`.
- **Action:** Submitting the form.
- **Data Passed:** Name, Phone, Jewelry Type, Core Idea, Materials, Stone, Size.
- **Output:** Opens WhatsApp with a highly structured, multi-line brief outlining the exact specifications of the bespoke piece.

## 3. General Inquiries & Contact
- **Trigger:** Clicking a contact link.
- **Locations:** `/contact` page, Header (mobile), Footer.
- **Action:** Clicking "Message on WhatsApp".
- **Output:** Opens WhatsApp with a simple: *"Hello Biruh Adorn, I would like to get in touch."*

## 4. The Floating CTA
- **Trigger:** Any page, scrolling.
- **Location:** `FloatingWhatsApp.tsx` (bottom right corner).
- **Action:** Clicking the icon.
- **Output:** Opens WhatsApp with a general inquiry message.

## User Journeys
**Journey A (The Collector):**
Lands on Homepage -> Views Featured Jewelry -> Clicks through to Gallery -> Filters by "Rings" -> Clicks a Ring -> Opens Modal -> Clicks "Order on WhatsApp".

**Journey B (The Visionary):**
Lands on Homepage -> Reads "Custom Jewelry" section -> Clicks through to `/custom` -> Reads the process -> Fills out the Consultation Form -> Submits via WhatsApp.
