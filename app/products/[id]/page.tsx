"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const API_URL = "https://threespacebackend.onrender.com";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  isNew?: boolean;
  tags?: string[] | string;
  imagePath?: string;
  images?: string[];
  createdAt: string;
  updatedAt: string;
}

export default function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [volume, setVolume] = useState<string>("100 ml");
  const [openChar, setOpenChar] = useState(true);
  const [openDesc, setOpenDesc] = useState(true);
  const [openPay, setOpenPay] = useState(false);
  const [openReturns, setOpenReturns] = useState(false);

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try dedicated endpoint first
        const direct = await fetch(`${API_URL}/api/products/${id}`);
        if (direct.ok) {
          const data = await direct.json();
          setProduct(data);
          return;
        }

        // Fallback: fetch list and find by id
        const list = await fetch(`${API_URL}/api/products`);
        if (!list.ok) throw new Error(`HTTP ${list.status}`);
        const arr: Product[] = await list.json();
        const found = arr.find(p => p._id === id);
        if (!found) throw new Error("Product not found");
        setProduct(found);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load product");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const images = useMemo(() => {
    if (!product) return [] as string[];
    const clean = (p: string) => p.replace(/\\/g, "/").replace(/^\/+/, "");
    let imgs: string[] = [];
    if (Array.isArray(product.images) && product.images.length > 0) {
      imgs = product.images.map(clean);
    } else if (product.imagePath) {
      imgs = [clean(product.imagePath)];
    }
    return imgs.slice(0, 5);
  }, [product]);

  const tagList = useMemo(() => {
    if (!product) return [] as string[];
    let tags: string[] = [];
    if (Array.isArray(product.tags)) {
      tags = product.tags.filter(t => typeof t === "string");
    } else if (typeof product.tags === "string") {
      try {
        const parsed = JSON.parse(product.tags);
        if (Array.isArray(parsed) && parsed.every(t => typeof t === "string")) tags = parsed;
        else tags = [product.tags];
      } catch {
        tags = [product.tags];
      }
    }
    if (tags.length === 0) tags = ["Safe Launch", "Quick Assembly"];
    return tags;
  }, [product]);

  if (loading) return <div style={{minHeight:'100vh',display:'grid',placeItems:'center',background:'#0f0f1a',color:'#b4b4ff'}}>Loading...</div>;
  if (error || !product) return <div style={{minHeight:'100vh',display:'grid',placeItems:'center',background:'#0f0f1a',color:'#ff7a7a'}}>{error || 'Not found'}</div>;

  const year = new Date(product.createdAt).getFullYear();
  const itemNo = product._id?.slice(-6).toUpperCase();

  return (
    <div style={{ background:'#0f0f1a', color:'#e9e9ff', minHeight:'100vh' }}>
      <Navbar />
      <main style={{ maxWidth:1200, margin:'0 auto', padding:'2rem 1rem' }}>
        <button onClick={() => router.back()} style={{ background:'none', border:'1px solid #2a2a4a', color:'#b4b4ff', padding:'0.4rem 0.8rem', borderRadius:10, cursor:'pointer', marginBottom:16 }}>← Back</button>

        <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:24 }}>
          {/* Images area - main + 2x2 thumbnails */}
          <section>
            <div style={{ background:'#1a1a2e', borderRadius:16, overflow:'hidden' }}>
              {images[0] ? (
                <img src={`${API_URL}/${images[0]}`} alt={`${product.name} main`} style={{ width:'100%', height:420, objectFit:'cover', display:'block' }} />
              ) : (
                <div style={{height:420,display:'grid',placeItems:'center',color:'#444'}}>—</div>
              )}
            </div>
            {images.slice(1).length > 0 && (
              <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:12, marginTop:12 }}>
                {images.slice(1).map((img, idx) => (
                  <div key={idx} style={{ background:'#1a1a2e', borderRadius:16, overflow:'hidden' }}>
                    <img src={`${API_URL}/${img}`} alt={`${product.name} ${idx+2}`} style={{ width:'100%', height:200, objectFit:'cover' }} />
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Details area - structured like reference */}
          <section style={{ background:'#141426', border:'1px solid #21214a', borderRadius:18, padding:'1.25rem 1.25rem 1.5rem' }}>
            <div style={{ marginBottom:12 }}>
              <div style={{ fontSize:12, letterSpacing:1, color:'#8a8abf', textTransform:'uppercase' }}>Perfume</div>
              <h1 style={{ fontSize:26, fontWeight:800, margin:'6px 0 6px' }}>{product.name}</h1>
              <div style={{ display:'flex', alignItems:'baseline', gap:10 }}>
                <span style={{ fontSize:22, color:'#b4b4ff' }}>₹{product.price.toFixed(2)}</span>
                {product.oldPrice && (
                  <span style={{ textDecoration:'line-through', color:'#777' }}>₹{product.oldPrice.toFixed(2)}</span>
                )}
              </div>
            </div>

            {/* Volume selector */}
            <div style={{ margin:'8px 0 14px' }}>
              <div style={{ fontSize:12, color:'#8a8abf', marginBottom:6 }}>VOLUME</div>
              <div style={{ display:'flex', gap:8 }}>
                {["100 ml", "70 ml", "50 ml"].map(v => (
                  <button key={v} onClick={() => setVolume(v)} style={{
                    padding:'4px 8px', borderRadius:8, border: volume===v ? '1px solid #5b5bff' : '1px solid #2a2a4a',
                    background: volume===v ? '#1e1e3a' : 'transparent', color:'#e9e9ff', cursor:'pointer', fontSize:12
                  }}>{v}</button>
                ))}
              </div>
            </div>

            {/* Add to bag / Buy now */}
            <div style={{ display:'grid', gap:10, gridTemplateColumns:'1fr' }}>
              <button style={{ background:'#000', color:'#fff', padding:'0.8rem 1rem', border:'1px solid #2a2a4a', borderRadius:10, cursor:'pointer' }}>Add to Bag</button>
              <button style={{ background:'transparent', color:'#e9e9ff', padding:'0.8rem 1rem', border:'1px solid #2a2a4a', borderRadius:10, cursor:'pointer' }}>Buy Now</button>
            </div>

            {/* Collapsible sections */}
            <div style={{ marginTop:16 }}>
              {/* Characteristics */}
              <div style={{ borderTop:'1px solid #26264a' }}>
                <button onClick={() => setOpenChar(v=>!v)} style={{ width:'100%', textAlign:'left', background:'none', border:'none', color:'#e9e9ff', padding:'12px 2px', cursor:'pointer', display:'flex', justifyContent:'space-between' }}>
                  <span style={{ fontWeight:600, fontSize:13 }}>CHARACTERISTICS</span>
                  <span style={{ color:'#7a7ab3' }}>{openChar ? '▾' : '▸'}</span>
                </button>
                {openChar && (
                  <div style={{ padding:'0 2px 12px', fontSize:13, color:'#bfbfd9' }}>
                    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', rowGap:6 }}>
                      <div>Brand</div><div style={{ color:'#d6d6ff' }}>3SPACE</div>
                      <div>Collection</div><div style={{ color:'#d6d6ff' }}>{year}</div>
                      <div>Item no</div><div style={{ color:'#d6d6ff' }}>{itemNo}</div>
                      <div>Tags</div><div style={{ color:'#d6d6ff' }}>{tagList.join(', ')}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div style={{ borderTop:'1px solid #26264a' }}>
                <button onClick={() => setOpenDesc(v=>!v)} style={{ width:'100%', textAlign:'left', background:'none', border:'none', color:'#e9e9ff', padding:'12px 2px', cursor:'pointer', display:'flex', justifyContent:'space-between' }}>
                  <span style={{ fontWeight:600, fontSize:13 }}>DESCRIPTION</span>
                  <span style={{ color:'#7a7ab3' }}>{openDesc ? '▾' : '▸'}</span>
                </button>
                {openDesc && (
                  <div style={{ padding:'0 2px 12px', fontSize:14, color:'#bfbfd9', lineHeight:1.6 }}>
                    {product.description}
                  </div>
                )}
              </div>

              {/* Payment & Delivery */}
              <div style={{ borderTop:'1px solid #26264a' }}>
                <button onClick={() => setOpenPay(v=>!v)} style={{ width:'100%', textAlign:'left', background:'none', border:'none', color:'#e9e9ff', padding:'12px 2px', cursor:'pointer', display:'flex', justifyContent:'space-between' }}>
                  <span style={{ fontWeight:600, fontSize:13 }}>PAYMENT & DELIVERY</span>
                  <span style={{ color:'#7a7ab3' }}>{openPay ? '▾' : '▸'}</span>
                </button>
                {openPay && (
                  <div style={{ padding:'0 2px 12px', fontSize:13, color:'#bfbfd9' }}>
                    Standard delivery in 3-7 business days. Secure online payments supported.
                  </div>
                )}
              </div>

              {/* Returns */}
              <div style={{ borderTop:'1px solid #26264a', borderBottom:'1px solid #26264a' }}>
                <button onClick={() => setOpenReturns(v=>!v)} style={{ width:'100%', textAlign:'left', background:'none', border:'none', color:'#e9e9ff', padding:'12px 2px', cursor:'pointer', display:'flex', justifyContent:'space-between' }}>
                  <span style={{ fontWeight:600, fontSize:13 }}>RETURNS</span>
                  <span style={{ color:'#7a7ab3' }}>{openReturns ? '▾' : '▸'}</span>
                </button>
                {openReturns && (
                  <div style={{ padding:'0 2px 12px', fontSize:13, color:'#bfbfd9' }}>
                    Returns accepted within 14 days in original condition.
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}


