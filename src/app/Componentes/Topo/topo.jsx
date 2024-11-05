import styles from "@/app/Componentes/Topo/topo.module.css"
import Image from "next/image"
import fotodeperfil from "@/app/Imagens/fotoDePerfil.png"
import SocialLinks from "../Links/SocialLinks";
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  

export default function Topo(){
    return(
        <main className={styles.container}>
            
            <div style={{width: "100%", height: "100vh", boxSizing: "border-box" , display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap", padding: "20px"}}>
                <div className={styles.fotoDePerfil}>
                    <Image src={fotodeperfil} width={400} height={400} style={{diplay: "flex", borderRadius: "200px 200px", border: "10px ridge grey"}} alt="Foto de perfil"/>
                </div>
                <div style={{fontFamily: "Courier New", height: "20vh", width: "100vh", boxSizing: "border-box" ,display: "flex",  flexDirection: "column", justifyContent: "space-evenly"}}>
                    <h1 style={{color: "white",fontWeight: "bold", fontSize: "35px"}}>
                        Hey, I'm <span style={{color: "#7CF24B"}}>Fernando Amorim!</span>
                         </h1>
                    <p style={{color: "white", fontSize: "20px"}}>
                        I'm a <span style={{color: "#7CF24B"}}> Web Developer</span>. I focus on creating digital experiences that are both functional and visually engaging.
                        </p>
                    <div style={{ display: "flex", flexDirection: "row", gap: "20px", boxSizing: "border-box", flexWrap: "wrap"}}>
                        <SocialLinks/>
                        <Link href="https://www.meucurriculoperfeito.com.br/feedback/session/b8fed46f-81e2-4a76-9ff1-e9c2130d5e97" target="_blank" style={{padding: "20px", display: "flex", justifyContent: "flex-start"}}>
                            <Button className={styles.download} style={{fontSize: "17px", padding: "10px 30px"}}> Download CV </Button>
                        </Link>
                    </div>
                </div>    
                
            </div>

        </main>
    );
}