import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.md};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.background} 0%, ${({ theme }) => theme.colors.surface} 100%);
`;

export const HeaderContent = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing["2xl"]};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  max-width: 500px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CounterDisplay = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fonts.sizes["3xl"]};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  text-align: center;

  span {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledButton = styled.button<{ variant?: "primary" | "secondary" }>`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.normal};
  border: 2px solid transparent;
  min-width: 140px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  ${({ theme, variant = "primary" }) => {
    if (variant === "secondary") {
      return `
        background-color: ${theme.colors.danger};
        color: white;

        &:hover {
          background-color: ${theme.colors.dangerHover};
          transform: translateY(-2px);
          box-shadow: ${theme.shadows.md};
        }

        &:active {
          transform: translateY(0);
        }
      `;
    }

    return `
      background-color: ${theme.colors.primary};
      color: white;

      &:hover {
        background-color: ${theme.colors.primaryHover};
        transform: translateY(-2px);
        box-shadow: ${theme.shadows.md};
      }

      &:active {
        transform: translateY(0);
      }
    `;
  }}
`;
