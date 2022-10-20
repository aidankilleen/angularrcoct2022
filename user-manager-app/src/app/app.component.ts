import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>User Manager</h1>

      <p-button label="Confirm" (click)="onClickConfirm()"></p-button>

      <hr>






      <i class="pi pi-users" style="font-size:5em"></i>

      <p-button label="Click" ></p-button>

      <button pButton class="p-button-success">Press Me</button>


      <h5>Button Set</h5>
      <span class="p-buttonset">
          <button pButton pRipple label="Save" icon="pi pi-check"></button>
          <button pButton pRipple label="Delete" icon="pi pi-trash"></button>
          <button pButton pRipple label="Cancel" icon="pi pi-times"></button>
      </span>


      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero soluta reiciendis officiis harum odit rerum rem nemo, possimus nostrum tempore voluptatum, debitis, corrupti eum. Maiores quisquam delectus unde neque vero.</p>

      <hr>

      <p-accordion>
        <p-accordionTab header="Header I" [selected]="true">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </p-accordionTab>
        <p-accordionTab header="Header II">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
        </p-accordionTab>
        <p-accordionTab header="Header III">
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
        </p-accordionTab>
      </p-accordion>


      <p-confirmDialog header="Confirmation" icon="pi pi-exclamation-triangle">
      </p-confirmDialog>
    </div>
  `,
  providers: [ConfirmationService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-manager-app';

  constructor(private confirmationService: ConfirmationService) {
  }

  onClickConfirm() {

    this.confirmationService.confirm({
      message: "Are you sure you want to delete?", 
      accept: () => {
        alert("ok, let's delete");
      }, 
      reject: () => {
        alert("cancelled");
      }
      
    })
  }
}
