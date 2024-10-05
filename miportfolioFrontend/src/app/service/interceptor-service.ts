/* import { HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";
import { TokenService } from "./token.service";
import { Injectable } from "@angular/core";
import { PersonaService } from "./persona.service";
import { SExperienciaService } from "./s-experiencia.service";
import { SEducacionService } from "./seducacion.service";
import { SProyectoService } from "./sproyecto.service";
import { SSkillService } from "./sskill.service";

@Injectable({
    providedIn: 'root'
})
export class InterceptorService {

    urlsToNotUse: Array<string>;

    constructor( private sproyectoService: SProyectoService, private sskillService:SSkillService,
        private sexperienciaService:SExperienciaService, private seducacionService : SEducacionService,
        private tokenService: TokenService, private personaService: PersonaService)  {
            this.urlsToNotUse = [
                this.personaService.getListaURL(),
                this.sexperienciaService.getListaURL(),
                this.seducacionService.getListaURL(),
                this.sproyectoService.getListaURL(),
                this.sskillService.getListaURL()
            ];
    }

        intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            if (this.isValidRequestForInterceptor(req.url)) {
                let intReq = req;
                const token = this.tokenService.getToken();
                if (token != null) {
                    intReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
                }
                return next.handle(intReq);
            }
            return next.handle(req);
        }
    
        private isValidRequestForInterceptor(requestUrl: string): boolean {
            for (let url of this.urlsToNotUse) {
                if (requestUrl === url) {
                    return false;
                }
            }
            return true;
        }
}
export const interceptorProvider = [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
}];

//quiero que si req.url es "this.personaService.getListaURL()" no se aplique el interceptor
//o que si req.url es "this.sexperienciaService.getListaURL()" tampoco se aplique el interceptor
//o que si req.url es "this.seducacionService.getListaURL()" tampoco se aplique el interceptor
//o que si req.url es "this.sproyectoService.getListaURL()" tampoco se aplique el interceptor
//o que si req.url es "this.sskillService.getListaURL()" tampoco se aplique el interceptor
 */