import BtnGithub from '../buttons/btnGithub';
import BtnLinkedin from '../buttons/btnLinkedin';
import BtnWhatsapp from '../buttons/btnWhatsapp';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-center md:space-x-4">
        <BtnGithub />
        <BtnLinkedin />
        <BtnWhatsapp />
      </div>
      <div className="mt-8 text-center text-gray-500">
        <p className="mb-2">Atualizado em 20/02/2024 | Campo Largo, PR</p>
        <p className="mb-2">Versão do projeto: 4.0.0</p>
        <p>© Kenny Vargas 2024</p>
      </div>
    </footer>
  );
}
