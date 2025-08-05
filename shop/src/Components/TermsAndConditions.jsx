import React from "react";
import { Container, Card } from "react-bootstrap";

export default function TermsAndConditions() {
  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold text-primary mb-4">Terms & Conditions</h2>
      <p className="text-center text-muted mb-5">
        Please read these terms and conditions carefully before using Zeeshop.
      </p>

      <Card className="shadow-sm p-4">
        <h4 className="text-primary">1. Acceptance of Terms</h4>
        <p>
          By accessing and using Zeeshop, you agree to comply with these Terms & Conditions.
          If you do not agree, you should not use our services.
        </p>

        <h4 className="text-primary mt-4">2. Use of Our Services</h4>
        <p>
          You agree to use our website and services only for lawful purposes. 
          Any misuse or unauthorized use is strictly prohibited.
        </p>

        <h4 className="text-primary mt-4">3. Orders & Payments</h4>
        <p>
          All orders placed are subject to availability and confirmation of the order price. 
          Payment must be completed before the order is processed.
        </p>

        <h4 className="text-primary mt-4">4. Product Information</h4>
        <p>
          We strive to ensure all product details, descriptions, and prices are accurate. 
          However, errors may occur, and we reserve the right to correct them.
        </p>

        <h4 className="text-primary mt-4">5. Limitation of Liability</h4>
        <p>
          Zeeshop is not liable for any indirect or consequential damages arising from the use of our services.
        </p>

        <h4 className="text-primary mt-4">6. Changes to Terms</h4>
        <p>
          We may revise these Terms & Conditions at any time. Continued use of our services means you accept the updated terms.
        </p>

        <p className="mt-4">
          If you have any questions, please contact us at <strong>support@zeeshop.com</strong>.
        </p>
      </Card>
    </Container>
  );
}
