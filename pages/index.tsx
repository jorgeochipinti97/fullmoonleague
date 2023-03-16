import {
  Accordion,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { ReglamentoPago } from "../components/ui/reglamento/index";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import Head from "next/head";
import { useState, useEffect } from "react";
import { FullScreenLoading } from "@/components/ui/FullScreenLoading";
export default function Home() {
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(true);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>FullMoon</title>
      </Head>

      {loading ?
      <>
        <div data-aos="fade-down">
          <Box display="flex" flexDirection="column">
            <Box display="flex" justifyContent="center">
              <Box>
                <Box display="flex" justifyContent="center">
                  <Image src="/logo.png" width={200} height={200} alt="logo" />
                </Box>
                <Box display="flex" justifyContent="center">
                  <Typography
                    variant="h3"
                    component="h1"
                    sx={{ color: "black", textAlign: "center" }}
                  >
                    FULLMOON LEAGUE
                  </Typography>
                  {/* <SportsSoccerIcon sx={{ color: "black", fontSize: 40 }} /> */}
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
        <Divider sx={{ my: 1 }} />
        <Box display="flex" justifyContent="center">
          <Box
            sx={{ width: "100vw", mt: 5 }}
            display="flex"
            flexDirection="column"
          >
            <div data-aos="fade-right">
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "black", textAlign: "center", mb: 3 }}
                >
                  {" "}
                  ¡Bienvenidos!
                </Typography>
              </Box>
            </div>
            <Box
              sx={{ height: "90vh", width: "100vw", mt: 5, mb: 5 }}
              display="flex"
              justifyContent="center"
            >
              <ParallaxProvider>
                <Parallax speed={-7}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      backgroundImage: `url('/pelota.png')`,
                      backgroundPosition: "left bottom",
                      width: "100vw",
                      height: "100vh",
                    }}
                  >
                    <div data-aos="zoom-in">
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                          m: 1,
                        }}
                      >
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            mr: 2,
                            ml: 2,
                            display: {
                              xs: "none",
                              sm: "none",
                              lg: "block",
                              xl: "block",
                            },
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            sx={{
                              textShadow: "2px 2px 3px black",
                              textAlign: "justify",
                              color: "white",
                              fontSize: "3rem",
                              hyphens: "auto",
                              fontWeight: "bold",
                            }}
                          >
                            Nos encontramos muy emocionados de lanzar nuestra
                            primera edición y nos alegra que estén aquí para ser
                            parte de este nuevo comienzo.
                          </Typography>
                        </Box>
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            mr: 2,
                            ml: 2,
                            display: { xs: "block", sm: "block", lg: "none" },
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            sx={{
                              textShadow: "2px 2px 3px black",
                              textAlign: "center",
                              color: "white",
                              fontSize: "2rem",
                              hyphens: "auto",
                              display: { xs: "block", sm: "block", lg: "none" },
                            }}
                          >
                            Nos encontramos muy emocionados de lanzar nuestra
                            primera edición y nos alegra que estén aquí para ser
                            parte de este nuevo comienzo.
                          </Typography>
                        </Box>
                      </Box>
                    </div>
                  </Box>
                </Parallax>
              </ParallaxProvider>
            </Box>
            <Box
              sx={{ height: "90vh", width: "100vw", mt: 5, mb: 5 }}
              display="flex"
              justifyContent="center"
            >
              <ParallaxProvider>
                <Parallax speed={-7}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      backgroundImage: `url('/partido.png')`,
                      backgroundPosition: "center top",
                      backgroundSize: "cover",
                      width: "100vw",
                      height: "100vh",
                    }}
                  >
                    <div data-aos="zoom-in-left">
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                          m: 1,
                        }}
                      >
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            mr: 2,
                            ml: 2,
                            display: {
                              xs: "none",
                              sm: "none",
                              lg: "block",
                              xl: "block",
                            },
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            sx={{
                              textShadow: "2px 2px 3px black",
                              textAlign: "justify",
                              color: "white",
                              fontSize: "3rem",
                              hyphens: "auto",
                              fontWeight: "bold",
                            }}
                          >
                            Nos enorgullece ser una liga que promueve el
                            deporte, la amistad y la sana competencia entre
                            todos nuestros equipos y jugadores.
                          </Typography>
                        </Box>
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            mr: 2,
                            ml: 2,
                            display: { xs: "block", sm: "block", lg: "none" },
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            sx={{
                              textShadow: "2px 2px 3px black",
                              textAlign: "center",
                              color: "white",
                              fontSize: "2rem",
                              hyphens: "auto",
                              display: { xs: "block", sm: "block", lg: "none" },
                            }}
                          >
                            Nos enorgullece ser una liga que promueve el
                            deporte, la amistad y la sana competencia entre
                            todos nuestros equipos y jugadores.
                          </Typography>
                        </Box>
                      </Box>
                    </div>
                  </Box>
                </Parallax>
              </ParallaxProvider>
            </Box>
            <Box
              sx={{ height: "90vh", width: "100vw", mt: 5, mb: 5 }}
              display="flex"
              justifyContent="center"
            >
              <ParallaxProvider>
                <Parallax speed={-7}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      backgroundImage: `url('/ambulancia.png')`,
                      backgroundPosition: "center top",
                      backgroundSize: "cover",
                      width: "100vw",
                      height: "100vh",
                    }}
                  >
                    <div data-aos="zoom-out">
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                          m: 1,
                        }}
                      >
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            mr: 2,
                            ml: 2,
                            display: {
                              xs: "none",
                              sm: "none",
                              lg: "block",
                              xl: "block",
                            },
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            sx={{
                              textShadow: "2px 2px 3px black",
                              textAlign: "justify",
                              color: "white",
                              fontSize: "3rem",
                              hyphens: "auto",
                              fontWeight: "bold",
                            }}
                          >
                            Nos enorgullece ser una liga que promueve el
                            deporte, la amistad y la sana competencia entre
                            todos nuestros equipos y jugadores.
                          </Typography>
                        </Box>
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            mr: 2,
                            ml: 2,
                            display: { xs: "block", sm: "block", lg: "none" },
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            sx={{
                              textShadow: "2px 2px 3px black",
                              textAlign: "center",
                              color: "white",
                              fontSize: "2rem",
                              hyphens: "auto",
                              display: { xs: "block", sm: "block", lg: "none" },
                            }}
                          >
                            Contamos con una unidad sanitaria de traslado de
                            emergencia equipada con un desfibrilador, para
                            garantizar que cualquier emergencia médica sea
                            atendida rápidamente y de manera efectiva.
                          </Typography>
                        </Box>
                      </Box>
                    </div>
                  </Box>
                </Parallax>
              </ParallaxProvider>
            </Box>
            <Box sx={{ m: 1, mt: 15 }}>
              <Divider sx={{ my: 1 }} />
            </Box>
            <div data-aos="flip-left">
              <Box sx={{ m: 1 }}>
                <Accordion sx={{ backgroundColor: "#023047" }}>
                  <AccordionSummary>
                    <Typography sx={{ fontSize: 30, color: "white" }}>
                      ¿Dónde estamos?
                    </Typography>
                  </AccordionSummary>
                  <AccordionSummary>
                    <Typography
                      sx={{
                        textAlign: "justify",
                        color: "white",
                        fontSize: 20,
                        hyphens: "auto",
                      }}
                    >
                      Nuestra liga está ubicada en la zona de Canning y contamos
                      con el predio Club Portugués - Chara Predio, donde se
                      jugarán los partidos. Estamos comprometidos en ofrecer una
                      experiencia de fútbol divertida y competitiva para todos
                      los equipos y jugadores que formen parte de nuestra liga.
                    </Typography>
                  </AccordionSummary>
                </Accordion>
              </Box>

              <Box sx={{ maxWidth: "100vw" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.4093693765517!2d-58.49091508449625!3d-34.871065279200245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd73a383c1d37%3A0xfe449e18729f36a0!2sCharaPredio!5e0!3m2!1ses!2sar!4v1678881657971!5m2!1ses!2sar"
                  width="100%"
                  height="450"
                  loading="lazy"
                ></iframe>
              </Box>
            </div>

            <Divider sx={{ my: 1 }} />
            <div data-aos="flip-left">
              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: "black", textAlign: "center", mb: 3 }}
                >
                  Domingo a partir de las 15 hs
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "black", textAlign: "center", mb: 3 }}
                >
                  ¿Tenes equipo? ¡Escribinos!
                </Typography>
              </Box>
            </div>
            <div data-aos="flip-up">
              <Box display="flex" justifyContent="center">
                <Box
                  sx={{
                    color: "black",
                    mr: 2,
                    borderRadius: "9px",
                    border: "1px solid black",
                    p: 1,
                  }}
                >
                  <WhatsAppIcon sx={{ fontSize: 50 }} />
                </Box>
                <Box
                  sx={{
                    color: "black",
                    ml: 2,
                    borderRadius: "9px",
                    border: "1px solid black",
                    p: 1,
                  }}
                >
                  <InstagramIcon sx={{ fontSize: 50 }} />
                </Box>
              </Box>
            </div>

            <Divider sx={{ my: 1 }} />
            <div data-aos="flip-down">
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "black", textAlign: "center", mt: 2, mb: 0.5 }}
                >
                  ¿No tenes equipo?
                </Typography>
                <Box display="flex" justifyContent="center" sx={{ mx: 2 }}>
                  <Typography
                    variant="h5"
                    sx={{ color: "black", textAlign: "center" }}
                  >
                    ¡Quedate a compartir el sunset con nosotros!
                  </Typography>
                  <NightlifeIcon
                    sx={{
                      color: "black",
                      fontSize: 30,
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "block",
                        lg: "block",
                        xl: "block",
                      },
                    }}
                  />
                </Box>
              </Box>
            </div>
            <Divider sx={{ my: 1 }} />
            <Box display="flex" justifyContent="center" sx={{ mt: 3,mb:5 }}>
              <Box>
                <Box sx={{ mb: 3 }}>
                  <div data-aos="zoom-in-down">
                    <Typography
                      variant="h3"
                      sx={{ textAlign: "center", color: "black" }}
                    >
                      Reglamento
                    </Typography>
                  </div>
                </Box>
                <Box>
                  <ReglamentoPago />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </>
      :
      <>
        <FullScreenLoading />
      </>
      }
    </>
  );
}
