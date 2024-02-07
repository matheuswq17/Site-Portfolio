import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MEU NOME É <span>MATHEUS</span>
            </div>
            <div className="des">
                {/* 30 */}
                Sou estudante de Engenharia de Software pela Faculdade de Informática e Administração Paulista (Fiap). Atualmente cursando 3º.Semestre
            </div>
            
            <a href="/democv.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Baixar Curriculum
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/avatar.jpg" alt="" />
                <div className="info">
                    <div>Desenvolvedor</div>
                    <div>Brasileiro</div>
                    <div>14/03</div>
                    <div>Masculino</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
