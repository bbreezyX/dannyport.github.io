import React from 'react';
import { Container, Row, Col , Image} from 'react-bootstrap';
import { FaGithub, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

const About = () => (
    <Container id="about" className='section'>
    <Row>
        <Col>
            {/* Logo Profil */}
            <Image
                src="profil.jpeg"
                roundedCircle
                alt="Profile Logo"
                width={150}
                height={150}
                className="mb-4"
            />
            <h2>Hi, I'm Muhammad Dany Prayudha</h2>
            <br></br>
            <div className='about-p'>
                <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                        'I am a passionate software developer.',
                        'Experienced in building web applications.', 
                        1000,
                        'Using modern technologies like ReactJS, NextJS.',
                        1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    />
            </div>
            <div className="d-flex justify-content-center mt-3 ">
            <a href="https://github.com/bbreezyX" target="_blank" rel="noopener noreferrer" className="mx-3">
                <FaGithub size={32} className='social-icon'/>
            </a>
            <a href="https://instagram.com/dannyprayudha" target="_blank" rel="noopener noreferrer" className="mx-3">
                <FaInstagram size={32} className='social-icon'/>
            </a>
        </div>
        </Col>
    </Row>

    {/* Divider */}
    <hr className="divider" />

    {/* Riwayat Pendidikan */}
    <Row className="text-start education-section">
        <Col>
            <h3 className="section-title">Riwayat Pendidikan</h3>
            <ul className="education-list">
                <li><strong>SMA Negeri 5 Jambi</strong> - Jurusan IPA (2017 - 2020)</li>
                <li><strong>Universitas Dinamika Bangsa Jambi</strong> - Sistem Informasi (2021 - 2024)</li>
            </ul>
        </Col>
    </Row>

    {/* Divider */}
    <hr className="divider" />

    {/* Pengalaman */}
    <Row className="text-start experience-section">
        <Col>
            <h3 className="section-title">Pengalaman</h3>
            <ul className="experience-list">
                <li>
                    <strong>Internship - Software Developer</strong> di PT Teknologi Maju (2024)
                    <p className="experience-description">
                        Mengerjakan proyek FullStack dengan React dan Node.js, serta melakukan deployment aplikasi.
                    </p>
                </li>
                <li>
                    <strong>Freelance - Frontend Developer</strong> (2023 - Sekarang)
                    <p className="experience-description">
                        Membangun website responsif menggunakan React, Bootstrap, dan API eksternal.
                    </p>
                </li>
            </ul>
        </Col>
    </Row>
</Container>
);

export default About;
