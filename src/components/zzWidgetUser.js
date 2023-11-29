import React from "react";
import "css/WidgetUser.css";
import { Button } from "react-bootstrap"; 

export default function WidgetUser() {
  return (
    <div>
      <Button
        class="btn btn-block nav-link btn-warning font-weight-bold"
        id="RegistrarseButton"
      >
        Registrate...
      </Button>
      {       <div id="LogInModal" class="modal " role="dialog">
  <div class="modal-dialog modal-lg" role="content">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Ingresar </h4>
        <button type="button" class="close" data-dismiss="modal">
          &times;
        </button>
      </div>
      <div class="modal-body">
        <form id="formLogIn">
          <div class="form-row">
            <div class="form-group col-sm-4">
              <label class="sr-only" for="email" id="logInEmail">
                E-mail
              </label>
              <input
                type="email"
                class="form-control form-control-sm mr-1"
                id="logInEmail"
                placeholder="E-mail"
              />
            </div>
            <div class="form-group col-sm-4">
              <label class="sr-only" for="pass" id="logInContrasena">
                Contraseña
              </label>
              <input
                type="password"
                class="form-control form-control-sm mr-1"
                id="logInContrasena"
                placeholder="Contraseña"
              />
            </div>
            <div class="col-sm-auto">
              <div class="form-check">
                <button
                  type="button"
                  class="btn btn-primary btn-sm ml-auto"
                  id="clearStorage"
                >
                  Borrar localStorage Se vuelve a crear los mismos usuarios con
                  cuentas al refrescar la página.
                </button>
              </div>
            </div>
          </div>
          <div class="form-row">
            <label id="labelFormLogIn"></label>
            <label id="labelFormLogIn2">
              O seleccione un usuario de los precargados:
            </label>
          </div>
          <div class="form-row">
            <button
              type="button"
              class="btn btn-secondary btn-sm ml-auto"
              id="bUs00"
            >
              00
            </button>
            <button
              type="button"
              class="btn btn-secondary btn-sm ml-auto"
              id="bUs01"
            >
              01
            </button>
            <button
              type="button"
              class="btn btn-secondary btn-sm ml-auto"
              id="bUs02"
            >
              02
            </button>
            <button
              type="button"
              class="btn btn-secondary btn-sm ml-auto"
              id="bUs03"
            >
              03
            </button>
            <button
              type="button"
              class="btn btn-secondary btn-sm ml-auto"
              id="bUs04"
            >
              04
            </button>
            <button
              type="button"
              class="btn btn-secondary btn-sm ml-auto"
              id="bUs05"
            >
              05
            </button>
            <button
              type="button"
              class="btn btn-secondary btn-sm ml-auto"
              id="bUs06"
            >
              06
            </button>
            <button
              type="button"
              class="btn btn-secondary btn-sm ml-auto"
              id="bUs07"
            >
              07
            </button>
            <button
              type="button"
              class="btn btn-secondary btn-sm ml-auto"
              id="bUs08"
            >
              08
            </button>
            <button
              type="button"
              class="btn btn-secondary btn-sm ml-auto"
              id="bUs09"
            >
              09
            </button>
          </div>
          <div class="form-row">
            <label> </label>
          </div>
          <div class="form-row">
            <button
              type="button"
              class="btn btn-secondary btn-sm ml-auto"
              data-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              class="btn btn-primary btn-sm ml-1"
              id="modalLogInButton"
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
 }
    </div>
  );
}
