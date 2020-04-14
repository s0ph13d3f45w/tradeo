import React from 'react'
import {DialogContent,DialogTitle, DialogContentText, DialogActions, Button} from '@material-ui/core'

const Terms = ({onClose, t}) =>{
    return(
        <>
  
            <DialogTitle>
                Terminos y condiciones de uso
            </DialogTitle>
            <DialogContent>
                <DialogContentText style={{fontSize: '0.9em'}}>
                    <section>
                        Al crear una cuenta de Tulis o mediante el uso de 
                        sus servicios, ya sea a través de un dispositivo móvil, aplicación, 
                        equipo móvil, estás de acuerdo con la obligación del cumplimiento 
                        de los los términos de uso.  Podemos hacer cambios en este acuerdo, 
                        en los términos y condiciones de uso y en el servicio per se, 
                        sin previo aviso y de forma esporádica.  
                        La versión más reciente de este Acuerdo se publicará 
                        en##### y se aconseja al usuario revisar cotidianamente 
                        las actualizaciones del mismo. 
                    </section>
                    <br />
                    <strong>Elegibilidad </strong>
                    <section>
                    Todo usuario debe ser mayor de edad (18 años en México) para crear 
                    una cuenta y/ usar los servicios de tulis. Además de la mayoría de edad, al aceptar este
                    acuerdo testificas que nunca has sido condenado o no disputaste un delito grave, un delito
                    sexual, o cualquier delito que implique violencia, y que no estás obligado a registrarte
                    como delincuente en ningún estado, registro federal o local de delincuentes. Al igual que por
                    este medio testimonias que no has sido diagnosticado con una condición que entre en la categoría de psicopatía y 
                    aceptas cumplir con las leyes locales, estatales, nacionales e internacionales.
                    </section>
                    <br />
                    <strong>Tu cuenta</strong>
                    <section>
                    Eres totalmente responsable de mantener la confidencialidad de tus datos
                    de acceso que utilizas para iniciar sesión en tulis, y eres el único responsable
                    de todas las acciones que ocurran bajo tu identificación en la plataforma y de forma física. 
                    Si crees que alguien ha tenido acceso a tu cuenta, por favor, ponte en contacto inmediatamente con ######## 
                    Los datos e información que otorgas al crear tu cuenta y mediante el uso de aquella, pueden ser 
                    monitoreados y archivados por el equipo administrativo de tulis, en caso de necesidad pueden
                    ser proporcionado y/o usados por terceros sin previo aviso con fines publicitarios, 
                    sociales, cuantitativos, de investigación y/o análisis por entes 
                    privados o públicos. Al crear una cuenta y/o hacer uso de tulis otorgas el derecho 
                    y la licencia para albergar, almacenar, utilizar, copiar, mostrar, reproducir, adaptar, modificar, publicar, modificar y distribuir información que nos autorices y aceptas que tulis puede acceder, conservar y revelar la información de tu cuenta y el Contenido.
                    </section>
                    
                    <br />
                    <strong>Seguridad</strong>
                    <section>En tulis buscamos crear una experiencia de usuario respetuosa a través del servicio que busca conectar usuarios para un beneficio mutuo donde intercambien conocimientos y/o objetos, este servicio permite a los usuarios comunicarse entre si, y cabe aclarar que tulis no es responsable de la conducta, intenciones, acciones y/o declaraciones de cualquier usuario dentro o fuera del Servicio. Por este medio Aceptas tener precaución en todas las interacciones con otros usuarios, sea al interior del servicio o de forma externa, sobre todo si deciden conocerse en persona. Además, te comprometes a revisar y seguir la guía para un uso seguro de tulis antes de usar el Servicio. Te comprometes a no proporcionar tu información personal y/o financiera a otros usuarios, y todos los datos que proporciones a otros usuarios y/o terceros dentro o fuera del servicio son totalmente bajo tu propia responsabilidad. Eres el único responsable de tus interacciones con otros usuarios. tulis no verifica ni investiga los antecedentes de sus usuarios y no declara ni garantiza la conducta de los mismos. tulis se deslinda de toda responsabilidad relacionada con su servicio, uso y/o usuarios. </section>
                    <br/>

                    <strong>Tus derechos </strong>
                    <section>
                    Al crear tu cuenta tulis te concede una licencia personal, mundial, exenta de regalías, no asignable, no exclusiva, revocable y no transferible a terceros para acceder y utilizar el Servicio. Esta licencia se otorga con el único propósito de que te permita usar y disfrutar de los beneficios del Servicio de la forma prevista por tulis y permitida por el presente Acuerdo. Cualquier mal uso de la cuenta, rompimiento de las términos y condiciones de uso, leyes locales, estatales, nacionales e internacionales y/o queja de terceros puede revocar tu licencia actual y futuras de forma inmediata e inapelable. 
                    </section>
                    <br/>
                    <strong>Al crear tu cuenta te comprometes a:</strong>
                    <section>
                    no copiar, modificar, transmitir, crear trabajos derivados de, hacer uso de, o reproducir en forma alguna cualquier material y/o información que se encuentre en y/o pertenezca a la plataforma tulis sin el previo consentimiento por escrito de tulis.
                    no utilizar el servicio de ninguna manera que pudiera interferir con, interrumpir o afectar negativamente el Servicio, los servidores, usuarios y/o redes conectados al Servicio.
                    no utilizar o desarrollar cualquier aplicación de terceros que interactúe con el Servicio, Contenido y/o información de otros usuarios sin nuestro consentimiento por escrito.
                    No ofrecer ni buscar por medio de tulis sustancias, servicios y/o objetos ilegales, obscenos, peligrosos, tóxicos, violentos o que infrinjan las leyes locales, estatales, nacionales e internacionales, al igual que está completamente prohibido el intercambio, propuesta y/o búsqueda de sustancias, servicios y/o objetos relativos a la sexualidad (incluido prostitución y pornografía), al uso de sustancias psicotrópicas (incluido psicotrópicos digitales y psicotrópicos de uso medicinal, terapéutico y/o hollistico), tóxicos, que impliquen un peligro (sea de forma directa o indirecta) a usuario o a terceros. Cualquier uso, intercambio, propuesta y/o búsqueda de sustancias, servicios y/o objetos que han sido citados previamente conlleva a una inminente expulsión y veto de tulis y a una posible denuncia ante las autoridades competentes.
                    </section>
                    <br />

                    <strong>Reglas de la comunidad</strong>
                    <section>
                    Al crear una cuenta y/o hacer uso de tulis, aceptas que no podrás:
                    utilizar el Servicio para ningún propósito que sea ilegal, perjudicial, nefasto, prohibido por este acuerdo y/o peligroso.
                    intimidar, agredir, acosar (incluye enviar correo no deseado, solicitar dinero o defraudar), maltratar, amenazar, herir, y/o difamar a cualquier persona.
                    publicar cualquier Contenido que viole o infrinja los derechos de cualquier persona (incluye derechos de autor), promueva el racismo, discriminación, xenofobia, intolerancia, odio y/ violencia hacia cualquier persona y/o grupo.
                    Utilizar la cuenta de otro usuario.
                    </section>
                    <br/>
                    
                    <strong>Limitación de responsabilidad</strong>
                    <section>En ningún caso y bajo ninguna circunstancia serán responsables Tulis, sus filiales, empleados, licenciantes, creadores, fundadores, o proveedores de servicio por cualquier daño indirecto, consecuente, ejemplar, incidental, especial, punitivo o mejorado.
                    Traspaso de datos e información relativa a los usuarios y actividades realizadas en tulis. 
                    En caso de fusión, venta, donación, intercambio y/o herencia de tulis, los nuevos adquisitores obtendrán toda la información relativa a los usuarios, sus datos y sus acciones realizadas en tulis (sean pasados, actuales y/o futuros) así mismo que la libertad de cambiar los termino y condiciones, servicios, funciones y/o filosofía de tulis siempre cuando los miembros del comité obtengan el 50 +1 % de unanimidad. 
                    </section>
            </DialogContentText>
            <DialogActions>
                <Button variant="contained" color="secondary" onClick={onClose}>{t("accept")}</Button>
            </DialogActions>
        </DialogContent>
    </>
    )
}

export default Terms