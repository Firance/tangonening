class Carousel {
    constructor(container) {
        this.container = container;
        this.slides = [
            {
                image: 'images/slide1.jpg',
                title: '欢迎来到我的个人网站',
                description: '探索、创新、分享'
            },
            {
                image: 'images/slide2.jpg',
                title: '热爱编程与技术',
                description: '专注于Web开发和人工智能'
            },
            {
                image: 'images/slide3.jpg',
                title: '创意无限',
                description: '让我们一起创造精彩'
            }
        ];
        this.currentSlide = 0;
        this.autoPlayInterval = null;
        this.init();
    }

    init() {
        // 创建轮播图结构
        this.createSlides();
        this.createIndicators();
        
        // 绑定控制按钮事件
        const prevButton = this.container.querySelector('.carousel-prev');
        const nextButton = this.container.querySelector('.carousel-next');
        
        prevButton.addEventListener('click', () => this.prevSlide());
        nextButton.addEventListener('click', () => this.nextSlide());
        
        // 开始自动播放
        this.startAutoPlay();
        
        // 鼠标悬停时暂停自动播放
        this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.container.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    createSlides() {
        const carouselContainer = this.container.querySelector('.carousel-container');
        
        this.slides.forEach((slide, index) => {
            const slideElement = document.createElement('div');
            slideElement.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
            
            slideElement.innerHTML = `
                <div class="carousel-overlay"></div>
                <img src="${slide.image}" alt="Slide ${index + 1}">
                <div class="slide-content">
                    <h2>${slide.title}</h2>
                    <p>${slide.description}</p>
                </div>
            `;
            
            carouselContainer.appendChild(slideElement);
        });
    }

    createIndicators() {
        const indicators = this.container.querySelector('.carousel-indicators');
        
        this.slides.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
            indicator.addEventListener('click', () => this.goToSlide(index));
            indicators.appendChild(indicator);
        });
    }

    updateSlides() {
        const slides = this.container.querySelectorAll('.carousel-slide');
        const indicators = this.container.querySelectorAll('.carousel-indicator');
        
        slides.forEach((slide, index) => {
            if (index === this.currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        
        indicators.forEach((indicator, index) => {
            if (index === this.currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateSlides();
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.updateSlides();
    }

    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlides();
    }

    startAutoPlay() {
        if (!this.autoPlayInterval) {
            this.autoPlayInterval = setInterval(() => this.nextSlide(), 5000);
        }
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// 初始化轮播图
document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = document.querySelector('.carousel');
    if (carouselElement) {
        new Carousel(carouselElement);
    }
}); 