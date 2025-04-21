// src/hooks/usePerfil.js
import { useUserContext } from '../contexts/UserContext';

export default function usePerfil() {
  const { usuario } = useUserContext();
  const nivel = usuario?.nivel_acesso || 0;

  return {
    nivel,
    isAluno: nivel === 1,
    isInstrutor: nivel === 2,
    isAuxiliar: nivel === 3,
    isProfessor: nivel === 4,
    isInstrutorOuMais: nivel >= 2,
    isProfessorOuMais: nivel >= 4,
  };
}
