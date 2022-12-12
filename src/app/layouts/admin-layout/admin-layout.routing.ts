import { Routes } from '@angular/router';

import { InicioComponent } from '../../pages/inicio/inicio.component';
import { MiOrganizacionSocialComponent } from '../../pages/mi-organizacion-social/mi-organizacion-social.component';
import { GenerarSolicitudComponent } from '../../pages/generar-solicitud/generar-solicitud.component';
import { MiPerfilComponent } from '../../pages/mi-perfil/mi-perfil.component';
import { FormPerfilComponent } from '../../pages/mi-perfil/form-perfil/form-perfil.component';
import { SolicitudesRechazadasComponent } from '../../pages/solicitudes-rechazadas/solicitudes-rechazadas.component';
import { RequisitosComponent } from '../../pages/requisitos/requisitos.component';
import { OrganizacionesSocialesComponent } from '../../pages/organizaciones-sociales/organizaciones-sociales.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'inicio',      component: InicioComponent },
    { path: 'mi-perfil',   component: MiPerfilComponent },
    { path: 'form-perfil',   component: FormPerfilComponent },
    { path: 'solicitudes-rechazadas',         component:  SolicitudesRechazadasComponent },
    { path: 'mi-organizacion-social',          component: MiOrganizacionSocialComponent },
    { path: 'generar-solicitud',           component: GenerarSolicitudComponent },
    { path: 'requisitos',           component: RequisitosComponent },
    { path: 'organizaciones-sociales',           component: OrganizacionesSocialesComponent }
];
