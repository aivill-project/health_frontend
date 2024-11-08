import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  // 기본 버튼 스타일
  background: ${props => props.$primary ? '#007AFF' : '#f1f3f5'};
  color: ${props => props.$primary ? 'white' : '#333'};

  &:hover {
    background: ${props => props.$primary ? '#0056b3' : '#e9ecef'};
  }

  &:active {
    transform: translateY(1px);
  }

  // 비활성화 상태
  opacity: ${props => props.disabled ? 0.5 : 1};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};

  // 전체 너비 옵션
  width: ${props => props.$fullWidth ? '100%' : 'auto'};

  // 크기 옵션
  ${props => props.size === 'small' && `
    padding: 8px 16px;
    font-size: 13px;
  `}

  ${props => props.size === 'large' && `
    padding: 16px 24px;
    font-size: 16px;
  `}
`;