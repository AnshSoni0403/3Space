"use client";

import { useState, useEffect } from "react";
import ParallaxBackground from "@/components/ParallaxBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Rocket, Loader2 } from "lucide-react";
import styles from "@/styles/components/RocketModel.module.css";
import showcase from "@/styles/ProductShowcase.module.css";

// API URL from your backend
const API_URL = 'https://threespacebackend.onrender.com';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  isNew?: boolean;
  tags?: string[];
  imagePath?: string;
  createdAt: string;
  updatedAt: string;
}

const fallbackSVG = (
  <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" rx="24" fill="url(#paint0_linear)"/>
    <path d="M100 40 L110 120 L100 160 L90 120 Z" fill="#fff" opacity="0.7"/>
    <circle cx="100" cy="130" r="10" fill="#fff" opacity="0.3"/>
    <defs>
      <linearGradient id="paint0_linear" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2b1055"/>
        <stop offset="1" stopColor="#7597de"/>
      </linearGradient>
    </defs>
  </svg>
);

export default function Rockets() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getImageUrl = (imagePath: string | undefined) => {
    if (!imagePath) return null;
    
    // Normalize the path - replace backslashes with forward slashes
    const normalizedPath = imagePath.replace(/\\/g, '/');
    
    // If the image path already includes http/https, return as is
    if (normalizedPath.startsWith('http://') || normalizedPath.startsWith('https://')) {
      return normalizedPath;
    }
    
    // If it starts with a slash, it's a relative path
    if (normalizedPath.startsWith('/')) {
      return `${API_URL}${normalizedPath}`;
    }
    
    // Otherwise, assume it's a relative path and prepend the API URL
    return `${API_URL}/${normalizedPath}`;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`${API_URL}/api/products`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Fetched products:', data);
        console.log('Product details:', data.map((p: Product) => ({
          name: p.name,
          imagePath: p.imagePath,
          fullImageUrl: p.imagePath ? getImageUrl(p.imagePath) : null
        })));
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getBadgeType = (product: Product) => {
    if (product.isNew) return "New";
    if (product.tags?.includes("bestseller")) return "Bestseller";
    if (product.tags?.includes("premium")) return "Premium";
    return "Featured";
  };

  if (loading) {
    return (
      <div className={showcase.bgStarfield}>
        <Navbar />
        <section className={showcase.heroSection}>
          <div className={showcase.heroContent}>
            <h1 className={showcase.heroTitle}>🚀 Model Rockets & Launch Kits</h1>
            <p className={showcase.heroSubtitle}>
              Explore our fleet of advanced model rockets and launch kits.<br />
              <span className={showcase.heroAccent}>Perfect for hobbyists, students, and aspiring engineers.</span>
            </p>
          </div>
        </section>
        <main className={showcase.productGridWrap}>
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
              <p className="text-lg text-gray-300">Loading products....</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className={showcase.bgStarfield}>
        <Navbar />
        <section className={showcase.heroSection}>
          <div className={showcase.heroContent}>
            <h1 className={showcase.heroTitle}>🚀 Model Rockets & Launch Kits</h1>
            <p className={showcase.heroSubtitle}>
              Explore our fleet of advanced model rockets and launch kits.<br />
              <span className={showcase.heroAccent}>Perfect for hobbyists, students, and aspiring engineers.</span>
            </p>
          </div>
        </section>
        <main className={showcase.productGridWrap}>
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="flex flex-col items-center gap-4 text-center">
              <p className="text-lg text-red-400">Error loading products</p>
              <p className="text-sm text-gray-400">{error}</p>
              <Button 
                onClick={() => window.location.reload()} 
                variant="secondary"
                className="mt-4"
              >
                Try Again
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={showcase.bgStarfield}>
      <Navbar />
      <section className={showcase.heroSection}>
        <div className={showcase.heroContent}>
          <h1 className={showcase.heroTitle}>🚀 Model Rockets & Launch Kits</h1>
          <p className={showcase.heroSubtitle}>
            Explore our fleet of advanced model rockets and launch kits.<br />
            <span className={showcase.heroAccent}>Perfect for hobbyists, students, and aspiring engineers.</span>
          </p>
        </div>
      </section>
      <main className={showcase.productGridWrap}>
        <h2 className={showcase.sectionTitle}>Our Rockets</h2>
        {products.length === 0 ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <p className="text-lg text-gray-300 mb-4">No products available</p>
              <p className="text-sm text-gray-400">Check back soon for new products!</p>
            </div>
          </div>
        ) : (
          <div className={showcase.productGrid}>
            {products.map((product) => (
              <div key={product._id} className={showcase.glassCard}>
                <div className={showcase.badgeWrap}>
                  <span className={`${showcase.floatingBadge} ${showcase[getBadgeType(product).toLowerCase()]}`}>
                    {getBadgeType(product)}
                  </span>
                </div>
                <div className={showcase.imageWrap}>
                  <AspectRatio ratio={1}>
                    {product.imagePath ? (
                      (() => {
                        const normalizedPath = product.imagePath.replace(/\\/g, '/').replace(/^\/+/, '');
                        const imageUrl = `https://threespacebackend.onrender.com/${normalizedPath}`;
                        return (
                          <Image
                            src={imageUrl}
                            alt={product.name}
                            fill
                            style={{ objectFit: "cover", borderRadius: "1.2rem" }}
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className={showcase.productImg}
                            onError={(e) => { 
                              console.log('Image failed to load:', product.imagePath);
                              console.log('Normalized path:', normalizedPath);
                              console.log('Attempted URL:', imageUrl);
                              e.currentTarget.style.display = 'none';
                              const fallback = e.currentTarget.parentElement?.querySelector('.fallback-svg') as HTMLElement;
                              if (fallback) fallback.style.display = 'block';
                            }}
                          />
                        );
                      })()
                    ) : null}
                    <div className="fallback-svg" style={{ 
                      display: product.imagePath ? 'none' : 'block',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%'
                    }}>
                      {fallbackSVG}
                    </div>
                    <div className={showcase.priceTag}>
                      <span>${product.price.toFixed(2)}</span>
                      {product.oldPrice && (
                        <span className={showcase.oldPrice}>${product.oldPrice.toFixed(2)}</span>
                      )}
                    </div>
                  </AspectRatio>
                </div>
                <div className={showcase.cardContent}>
                  <h3 className={showcase.productName}>{product.name}</h3>
                  <p className={showcase.productDesc}>{product.description}</p>
                  <ul className={showcase.featureList}>
                    {(() => {
                      let tags: string[] = [];
                      if (Array.isArray(product.tags)) {
                        tags = product.tags.filter(t => typeof t === 'string');
                      } else if (typeof product.tags === "string") {
                        try {
                          const parsed = JSON.parse(product.tags);
                          if (Array.isArray(parsed) && parsed.every(t => typeof t === 'string')) {
                            tags = parsed;
                          } else {
                            tags = [product.tags];
                          }
                        } catch {
                          tags = [product.tags];
                        }
                      }
                      if (!tags || tags.length === 0) {
                        tags = ["Safe Launch", "Quick Assembly"];
                      }
                      return tags.map((tag, i) => (
                        <li key={i} className={showcase.featureItem}>• {tag}</li>
                      ));
                    })()}
                  </ul>
                  <Button variant="secondary" className={showcase.ctaBtn}>
                    <Rocket className={showcase.rocketIcon} /> View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <section className={showcase.calloutSection}>
        <div className={showcase.calloutInner}>
          <p className={showcase.calloutText}>
            More exciting products and accessories coming soon. <span className={showcase.calloutAccent}>Stay tuned!</span>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
