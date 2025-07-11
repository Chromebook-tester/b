// 현재 선택된 부품을 추적하는 변수
let selectedPart = null;

// 섹션으로 스크롤하는 함수
function scrollToSection(partId) {
    // 이전에 선택된 섹션의 하이라이트 제거
    if (selectedPart) {
        const prevSection = document.getElementById(`section-${selectedPart}`);
        if (prevSection) {
            prevSection.classList.remove('highlighted');
        }
    }
    
    // 새로운 섹션 찾기
    const targetSection = document.getElementById(`section-${partId}`);
    if (targetSection) {
        // 부드럽게 스크롤
        targetSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        // 새로운 섹션에 하이라이트 추가
        targetSection.classList.add('highlighted');
        
        // 현재 선택된 부품 업데이트
        selectedPart = partId;
        
        // 0.5초 후 하이라이트 효과를 좀 더 부드럽게 적용
        setTimeout(() => {
            targetSection.style.transform = 'scale(1.02)';
            setTimeout(() => {
                targetSection.style.transform = 'scale(1)';
                targetSection.style.transition = 'transform 0.3s ease';
            }, 200);
        }, 100);
    }
}

// 동영상 버튼 클릭 이벤트 (예시)
document.addEventListener('DOMContentLoaded', function() {
    // 모든 동영상 버튼에 이벤트 리스너 추가
    const videoButtons = document.querySelectorAll('.video-button');
    
    videoButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 실제 동영상 재생 로직을 여기에 추가
            alert('동영상 기능은 추후 구현 예정입니다.');
            
            // 또는 실제 동영상 URL로 리다이렉트
            // window.open('https://youtube.com/watch?v=your-video-id', '_blank');
        });
    });
    
    // 핫스팟 호버 효과 개선
    const hotspots = document.querySelectorAll('.hotspot');
    
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('mouseenter', function() {
            // 호버 시 약간의 펄스 효과
            this.style.animation = 'pulse 1s infinite';
        });
        
        hotspot.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
        });
    });
    
    // 부드러운 스크롤 감지를 위한 Intersection Observer (선택사항)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 현재 보이는 섹션이 있다면 해당 핫스팟을 강조할 수 있음
                const sectionId = entry.target.id.replace('section-', '');
                // 필요시 핫스팟 강조 로직 추가
            }
        });
    }, {
        threshold: 0.5 // 섹션의 50%가 보일 때 트리거
    });
    
    // 모든 섹션을 관찰
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// CSS 애니메이션 추가를 위한 스타일 삽입
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .section {
        transition: all 0.3s ease, transform 0.3s ease;
    }
`;
document.head.appendChild(style);
