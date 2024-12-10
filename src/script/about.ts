// 전역 함수 타입 선언
declare global {
    interface Window {
        toggleProblems: (id: string) => void;
    }
}

export function toggleProblems(id: string): void {
    const problemList = document.getElementById(id);
    if (!problemList) return;
    
    const button = problemList.previousElementSibling as HTMLButtonElement;
    const arrow = button.querySelector('.arrow');
    
    problemList.classList.toggle('active');
    arrow?.classList.toggle('active');
}