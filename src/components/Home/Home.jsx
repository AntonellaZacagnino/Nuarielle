import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import data from '../../data/categorias.json';
const {categorias} = data;

export const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const backgroundImages = [
        'linear-gradient(135deg, rgba(216, 163, 179, 0.8), rgba(242, 158, 176, 0.6)), url("https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=800&fit=crop")',
        'linear-gradient(135deg, rgba(255, 182, 193, 0.8), rgba(255, 160, 122, 0.6)), url("https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1200&h=800&fit=crop")',
        'linear-gradient(135deg, rgba(255, 218, 185, 0.8), rgba(255, 192, 203, 0.6)), url("https://images.unsplash.com/photo-1587668178277-295251f900ce?w=1200&h=800&fit=crop")',
        'linear-gradient(135deg, rgba(216, 163, 179, 0.8), rgba(255, 182, 193, 0.6)), url("https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1200&h=800&fit=crop")'
    ];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
        }, 5000);
        
        return () => clearInterval(interval);
    }, [backgroundImages.length]);
    
    return (
        <div className='home'>
            <div className='hero-section'>
                {backgroundImages.map((image, index) => (
                    <div 
                        key={index}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''} ${index === 2 || index === 3 ? 'centered' : ''}`}
                        style={{ backgroundImage: image }}
                    ></div>
                ))}
                <div className='hero-overlay'></div>
                <div className='hero-content'>
                    <h1>Bienvenidx a Nuarielle!</h1>
                    <p className='subtitle'>Endulzamos tus momentos especiales con nuestras creaciones artesanales</p>
                    <div className='cta-buttons'>
                        <Link to='/categoria/tortas' className='cta-primary'>Ver Tortas</Link>
                        <Link to='/categoria/cupcakes' className='cta-secondary'>Ver Cupcakes</Link>
                    </div>
                </div>
                <div className='carousel-dots'>
                    {backgroundImages.map((_, index) => (
                        <button 
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        ></button>
                    ))}
                </div>
            </div>
            
            <div className='categories-grid'>
                <h2>Nuestras Especialidades</h2>
                <div className='categories'>
                    {categorias.map(cat => (
                        <Link key={cat.id} to={`/categoria/${cat.id}`} className='category-card'>
                            <div className='category-icon'>{cat.icon}</div>
                            <h3>{cat.nombre}</h3>
                            <p>{cat.descripcion}</p>
                        </Link>
                    ))}
                </div>
            </div>
            
            <div className='features'>
                <div className='feature'>
                    <div className='feature-icon'>✨</div>
                    <h3>Ingredientes Premium</h3>
                    <p>Solo utilizamos los mejores ingredientes para nuestras creaciones</p>
                </div>
                <div className='feature'>
                    <div className='feature-icon'>🎂</div>
                    <h3>Diseños Personalizados</h3>
                    <p>Creamos tortas únicas para tus ocasiones especiales</p>
                </div>
                <div className='feature'>
                    <div className='feature-icon'>🚚</div>
                    <h3>Entrega Rápida</h3>
                    <p>Llevamos nuestros productos frescos directamente a tu puerta</p>
                </div>
            </div>
        </div>
    )
}