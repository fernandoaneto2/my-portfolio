import styles from "@/app/Componentes/Topo/topo.module.css"
import Image from "next/image"
import fotodeperfil from "@/app/Imagens/fotoDePerfil.png"
import SocialLinks from "../Links/SocialLinks";

export default function Topo(){
    return(
        <main className={styles.main}>
            
            <div style={{width: "100%", height: "100vh", boxSizing: "border-box" , display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap", padding: "30px"}}>
                <div className={styles.fotoDePerfil}>
                    <Image src={fotodeperfil} width={400} height={400} style={{diplay: "flex", borderRadius: "200px 200px", border: "10px ridge grey"}} alt="Foto de perfil"/>
                </div>
                <div style={{height: "20vh", width: "100vh", boxSizing: "border-box" ,display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
                    <h1 style={{color: "white"}}>Hey, I'm Fernando Amorim!</h1>
                    <p style={{color: "white"}}>I'm a Web Developer. I focus on creating digital experiences that are both functional and visually engaging..</p>
                    <SocialLinks/>
                </div>    
            </div>

        </main>
    );
}