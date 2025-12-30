import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Error404Props {
  onGoHome?: () => void;
  onContactUs?: () => void;
  logoUrl?: string;
}

const Error404Page: React.FC<Error404Props> = ({
  onGoHome,
  onContactUs,
  logoUrl
}) => {
  const navigate = useNavigate();
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .error-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 40px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .background-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.03;
          background-image: radial-gradient(circle, #1a5235 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .error-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 600px;
          animation: fadeIn 0.8s ease-out;
        }

        .logo-container {
          margin-bottom: 40px;
          animation: float 3s ease-in-out infinite;
        }

        .logo {
          width: 80px;
          height: 80px;
          background: #ffc107;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          font-size: 40px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .brand-name {
          font-size: 24px;
          font-weight: 700;
          color: #198754;
          margin: 0;
        }

        .error-code {
          font-size: 120px;
          font-weight: 900;
          color: #1a5235;
          line-height: 1;
          margin: 0 0 20px 0;
          text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.05);
        }

        .error-title {
          font-size: 32px;
          font-weight: 700;
          color: #212529;
          margin: 0 0 16px 0;
        }

        .error-message {
          font-size: 16px;
          color: #6c757d;
          line-height: 1.6;
          margin: 0 0 40px 0;
        }

        .button-group {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 14px 32px;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .btn-primary {
          background: #1a5235;
          color: white;
        }

        .btn-primary:hover {
          background: #0f3020;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }

        .btn-secondary {
          background: white;
          color: #1a5235;
          border: 2px solid #1a5235;
        }

        .btn-secondary:hover {
          background: #1a5235;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }

        .decorative-leaves {
          position: absolute;
          font-size: 60px;
          opacity: 0.1;
          animation: float 4s ease-in-out infinite;
        }

        .leaf-1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .leaf-2 {
          top: 20%;
          right: 15%;
          animation-delay: 1s;
        }

        .leaf-3 {
          bottom: 15%;
          left: 15%;
          animation-delay: 2s;
        }

        .leaf-4 {
          bottom: 10%;
          right: 10%;
          animation-delay: 0.5s;
        }

        .suggestions {
          margin-top: 50px;
          padding: 24px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .suggestions h3 {
          font-size: 18px;
          font-weight: 700;
          color: #212529;
          margin: 0 0 16px 0;
        }

        .suggestions-list {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: left;
        }

        .suggestions-list li {
          padding: 8px 0;
          color: #495057;
          font-size: 14px;
        }

        .suggestions-list li::before {
          content: "🌿 ";
          margin-right: 8px;
        }

        .suggestions-list a {
          color: #1a5235;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s;
        }

        .suggestions-list a:hover {
          color: #0f3020;
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .error-code {
            font-size: 80px;
          }
          
          .error-title {
            font-size: 24px;
          }

          .button-group {
            flex-direction: column;
            width: 100%;
          }

          .btn {
            width: 100%;
          }

          .decorative-leaves {
            font-size: 40px;
          }
        }
      `}</style>

      <div className="error-container">
        <div className="background-pattern"></div>
        
        {/* Decorative leaves */}
        <div className="decorative-leaves leaf-1">🌿</div>
        <div className="decorative-leaves leaf-2">🌱</div>
        <div className="decorative-leaves leaf-3">🍃</div>
        <div className="decorative-leaves leaf-4">🌿</div>

        <div className="error-content">
          {/* Logo */}
          <div className="logo-container">
            {logoUrl ? (
              <img src={logoUrl} alt="Rootz of Maa" style={{ maxWidth: '150px', height: 'auto' }} />
            ) : (
              <>
                <div className="logo">🌿</div>
                <h2 className="brand-name">Rootz of Maa</h2>
              </>
            )}
          </div>

          {/* Error Code */}
          <h1 className="error-code">404</h1>

          {/* Error Title */}
          <h2 className="error-title">Oops! Page Not Found</h2>

          {/* Error Message */}
          <p className="error-message">
            The organic page you're looking for seems to have gone off the shelf. 
            Don't worry, we have plenty of other natural options for you to explore!
          </p>

          {/* Buttons */}
          <div className="button-group">
            <button 
              className="btn btn-primary" 
              onClick={() => {
                if (onGoHome) return onGoHome();
                navigate('/');
              }}
            >
              Back to Home
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => {
                if (onContactUs) return onContactUs();
                navigate('/contact');
              }}
            >
              Contact Us
            </button>
          </div>

          {/* Suggestions */}
          <div className="suggestions">
            <h3>Here's what you can do:</h3>
            <ul className="suggestions-list">
              <li>
                <a href="/">Visit our homepage</a> to explore our products
              </li>
              <li>
                <a href="/shop">Browse our shop</a> for organic powders
              </li>
              <li>
                <a href="/about">Learn more about us</a> and our mission
              </li>
              <li>
                <a href="/contact">Get in touch</a> if you need assistance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

// Demo with different variations
export const Error404Demo: React.FC = () => {
  return (
    <Error404Page
      onGoHome={() => alert('Navigating to home...')}
      onContactUs={() => alert('Navigating to contact...')}
    />
  );
};

export default Error404Page;