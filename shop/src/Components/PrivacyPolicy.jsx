import React from "react";
import { Container, Card } from "react-bootstrap";

export default function PrivacyPolicy() {
  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold text-primary mb-4">Privacy Policy</h2>
      <p className="text-center text-muted mb-5">
        At Zeeshop, we value your privacy and are committed to protecting your personal information.
      </p>

      <Card className="shadow-sm p-4">
        <h4 className="text-primary">1. Information We Collect</h4>
        <p>
          We may collect personal details such as your name, email address, phone number,
          shipping address, and payment information when you use our services.
        </p>

        <h4 className="text-primary mt-4">2. How We Use Your Information</h4>
        <p>
          Your information is used to process your orders, provide customer support,
          improve our services, and keep you updated with offers and promotions.
        </p>

        <h4 className="text-primary mt-4">3. Data Protection</h4>
        <p>
          We implement strict security measures to protect your personal data from unauthorized access,
          disclosure, or misuse.
        </p>

        <h4 className="text-primary mt-4">4. Third-Party Sharing</h4>
        <p>
          We do not sell your personal information. However, we may share data with trusted partners
          for order processing and delivery.
        </p>

        <h4 className="text-primary mt-4">5. Your Rights</h4>
        <p>
          You have the right to access, update, or delete your personal information by contacting our support team.
        </p>

        <h4 className="text-primary mt-4">6. Updates to this Policy</h4>
        <p>
          We may update our privacy policy periodically. Please check this page for the latest version.
        </p>

        <p className="mt-4">
          If you have any questions regarding this policy, contact us at 
          <strong> support@zeeshop.com</strong>.
        </p>
      </Card>
    </Container>
  );
}
