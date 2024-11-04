import styles from "./cabecalho.module.css";
import Link from 'next/link'

export default function Cabecalho(){
    return(
        <main className={styles.main}> 
            <nav className={styles.links} style={{padding: "15px", boxSizing: "border-box",display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center", justifyContent: "space-around", flexWrap: "wrap" }}>
                <div>
                <Link href="/about" style={{ textDecoration: 'none', color: 'white' }}>
                   FA
                </Link>
                </div> 
                <div style={{ display: "flex" , justifyContent: "space-between", flexWrap: "wrap", gap: "15px", fontSize: "15px"}}>   
                <Link href="/about" style={{ textDecoration: 'none', color: 'white' }}>
                    About me
                </Link>
                <Link href="/about" style={{ textDecoration: 'none', color: 'white' }}>
                    Projects
                </Link>
                <Link href="/about" style={{ textDecoration: 'none', color: 'white' }}>
                    Skills
                </Link>
                <Link href="/about" style={{ textDecoration: 'none', color: 'white' }}>
                    Contact
                </Link>
                </div>
            </nav>
        </main>
    );
}