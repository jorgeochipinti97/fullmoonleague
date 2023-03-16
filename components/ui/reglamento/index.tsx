import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { fontWeight } from "@mui/system";

export const ReglamentoPago = () => {
  return (
    <>
        <Accordion>
      <div data-aos="fade-left">
          <AccordionSummary>
            <Typography sx={{ fontWeight: "bold" }}>
              Información General
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" textAlign="justify">
              {" "}
              El presente reglamento es parte integrante del contrato suscripto
              por Fullmoon. Sus normas se reputan de conocimiento de todos los
              intervinientes. Siendo una obligación del jugador conocer las
              normas que regulan los torneos, no se admitirán bajo ningún
              concepto, reclamos basados en un real o supuesto desconocimiento
              del mismo. Fullmoon aplicará este reglamento, sus futuras
              modificaciones y las resoluciones tomadas en eventuales asambleas
              de delegados, basándose siempre en su buena fe. Cuando considere
              que la aplicación de estas normas derivara en algún tipo de
              situación a su criterio abusiva o injusta, podrá actuar fuera de
              este marco reglamentario, siempre priorizando el sentido de
              justicia y buena fe.
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography variant="body1" textAlign="justify">
              {" "}
              Fullmoon se reserva el derecho de admisión y permanencia tanto de
              los equipos como a sus jugadores, espectadores y acompañantes sin
              necesidad de aclarar la causa o motivo. Los jugadores deberán ser
              respetuosos frente a sus compañeros de equipo, rivales y miembros
              de LA ORGANIZACIÓN. Deberán obrar de buena fe, respetar reglas
              éticas, morales y de buenas costumbres, caso contrario podrán ser
              expulsados por LA ORGANIZACIÓN. Esta norma comprende asimismo la
              prohibición del consumo de bebidas alcohólicas y/o estupefacientes
              dentro de los predios deportivos, siendo pasible de ser suspendido
              por tiempo indeterminado quien fuere sorprendido en tales
              situaciones. Se entenderá que los jugadores se encuentran en
              perfecto estado de salud psicofísica que los habilita para jugar
              al fútbol, salvo que expresamente manifestaren lo contrario.
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography variant="body1" textAlign="justify">
              {" "}
              Fullmoon no se responsabiliza por las lesiones que pudieran sufrir
              los jugadores de EL EQUIPO dentro de los predios, las que corren
              por cuenta de quien las sufra. En caso de emergencia médica que
              afecte a alguno de los jugadores inscriptos, siempre que dichas
              lesiones no sean imputables a dolo de LA ORGANIZACIÓN, ésta última
              se comunicará con un servicio de emergencias médicas (área
              protegida), sin que ello implique asunción alguna de
              responsabilidad{" "}
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography variant="body1" textAlign="justify">
              {" "}
              El presente reglamento que regulará el desarrollo de los torneos
              se fundamenta en los reglamentos vigentes de A.F.A., F.I.F.A. y
              las disposiciones del International Board. El mismo regirá para
              todo campeonato, torneo, o partido (sea oficial o amistoso),
              organizado por Fullmoon .
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography variant="body1" textAlign="justify">
              {" "}
              Es requisito para el equipo que sus jugadores sean mayores de 18
              años.
            </Typography>
          </AccordionDetails>
      </div>
        </Accordion>

        <Accordion>
      <div data-aos="fade-rigth">
          <AccordionSummary>
            <Typography sx={{ fontWeight: "bold" }}>
              Estructura general del Torneo
            </Typography>
          </AccordionSummary>
          <AccordionSummary>
            <Typography>
              El criterio para definir las posiciones será el siguiente:
            </Typography>
          </AccordionSummary>
          <AccordionSummary>
            <Typography>1º - Mayor cantidad de puntos.</Typography>
          </AccordionSummary>
          <AccordionSummary>
            <Typography>2º - Mayor diferencia de gol.</Typography>
          </AccordionSummary>
          <AccordionSummary>
            <Typography>3º - Mayor cantidad de goles a favor.</Typography>
          </AccordionSummary>
          <AccordionSummary>
            <Typography>
              4º - Resultado del partido entre los equipos empatados.
            </Typography>
          </AccordionSummary>
      </div>
        </Accordion>

        <Accordion>
      <div data-aos="fade-left">
          <AccordionSummary>
            <Typography sx={{ fontWeight: "bold" }}>
              Horarios y tolerancia
            </Typography>
          </AccordionSummary>
          <AccordionSummary>
            <Typography>
              La organización enviará en su informe semanal la disposición de
              las canchas y los horarios. Los equipos deberán estar preparados
              para jugar en cualquiera de estos horarios. No se podrán cambiar
              ni los horarios ni la sede sin autorización de la organización
            </Typography>
          </AccordionSummary>
          <AccordionSummary>
            <Typography>
              Se respetarán estrictamente los horarios, y el árbitro será el
              responsable de:
            </Typography>
          </AccordionSummary>
          <AccordionSummary>
            <Typography>
              Descontar del tiempo de juego los minutos de demora luego de la
              hora de inicio del partido.
            </Typography>
          </AccordionSummary>
          <AccordionSummary>
            <Typography>
              Dar por finalizado el encuentro si, pasados los 15 (quince)
              minutos de la hora de inicio, sólo uno de los equipos se encuentra
              en la cancha con el mínimo reglamentario de 7 jugadores y el mismo
              reclama los puntos. Si el equipo presente quisiere jugar igual el
              partido y decide esperar al equipo demorado, acepta las
              incidencias del partido y acepta que se juegue menos tiempo. El
              arbitro no es el responsable de tomar esta decisión sino el propio
              delegado del equipo presente. Es decir, la realización del
              partido, pasados los quince minutos de tolerancia y no contando
              uno de los equipos con el mínimo de jugadores, está sujeta a la
              aceptación por parte del equipo presente de esperar al equipo
              rival y a jugar menor cantidad de tiempo. En caso de que el
              partido se juegue se considerará aceptación del equipo.
            </Typography>{" "}
          </AccordionSummary>
          <AccordionSummary>
            <Typography>
              Los partidos no darán comienzo hasta que estén las planillas
              firmadas con el número de camiseta respectivo. El tiempo que
              demande dicha tarea, luego de la hora de inicio, será descontado
              del tiempo de juego.
            </Typography>{" "}
          </AccordionSummary>
      </div>
        </Accordion>

        <Accordion>
      <div data-aos="fade-rigth">
          <AccordionSummary>
            <Typography sx={{ fontWeight: "bold" }}>Incripciones</Typography>
          </AccordionSummary>
          <AccordionSummary>
            <Typography>
              Las inscripciones serán presentadas según las formas y formularios
              que provean las autoridades del torneo, completándose todos los
              datos requeridos.
            </Typography>
          </AccordionSummary>
      </div>
        </Accordion>

        <Accordion>
      <div data-aos="fade-left">
          <AccordionSummary>
            <Typography sx={{ fontWeight: "bold" }}>Pagos</Typography>
          </AccordionSummary>
          <AccordionSummary>
            <Typography>
              Inscripción: Se abonará un arancel en concepto de inscripción para
              participar del torneo.
            </Typography>
          </AccordionSummary>
          <AccordionSummary>
            <Typography>
              Partido: los equipos deberán abonar un arancel en concepto del
              partido disputado
            </Typography>
          </AccordionSummary>
      </div>
        </Accordion>

        <Accordion>
      <div data-aos="fade-rigth">
          <AccordionSummary>
            <Typography sx={{ fontWeight: "bold" }}>
              {" "}
              Abandono o expulsión de un equipo
            </Typography>
          </AccordionSummary>
          <AccordionSummary>
            <Typography>
              Si por alguna razón un equipo abandona, es descalificado o
              expulsado del torneo, deberá abonar la totalidad de la inscripción
              y el costo de los partidos jugados. Si en el momento de abandono,
              descalificación o expulsión, el equipo ya ha abonado la totalidad
              de inscripción y partidos jugados, la organización le devolverá
              sólo el depósito/garantí{" "}
            </Typography>
          </AccordionSummary>
      </div>
        </Accordion>
    </>
  );
};
