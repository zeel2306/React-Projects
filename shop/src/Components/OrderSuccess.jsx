import React from 'react';
import { useNavigate } from 'react-router-dom';
import successGif from '../assets/success.gif'; // 🎥 Add any animation (Lottie/WebP/GIF)

export default function OrderSuccess() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); // Go to home after 3s
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '80vh' }}>
      <img src={successGif} alt="Order Successful" style={{ width: '200px' }} />
      <h2 className="text-success mt-3">Order Placed Successfully!</h2>
      <p className="text-muted">Redirecting to homepage...</p>
    </div>
  );
}
