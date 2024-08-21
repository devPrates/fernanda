import { Home, User,  Contact } from 'lucide-react'; // Importe os ícones que você vai usar

export const iconMap: Record<string, React.ComponentType> = {
  home: Home,
  user: User,
  contact: Contact,
  // Adicione outros ícones conforme necessário
};


export type NavLinkProps = {
    key: number;
    link: string;
    titulo: string;
    icon: string;
}



