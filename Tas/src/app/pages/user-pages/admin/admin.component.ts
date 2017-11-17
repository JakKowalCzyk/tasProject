import {Component, OnInit, ViewChild} from "@angular/core";
import {UserService} from "../../../services/user-service";
import {MatTableDataSource} from "./table-data-source";
import {MatDialog, MatPaginator, MatSnackBar} from "@angular/material";
import {ProgressDialogComponent} from "../../../components/dialog/progress/progress.dialog.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  displayedColumns = ['name', 'email', 'roleType', 'action', 'delete'];
  displayedColumnsMobile = ['user', 'action'];
  dataSource: MatTableDataSource<UserData>;
  dialogRefProgress: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private userService: UserService,
              public snackBar: MatSnackBar,
              public dialog: MatDialog) {
    this.loadUsers();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  isAdmin(): any {
    return this.userService.isAdmin();
  }


  ngOnInit(): void {
  }

  isOneAdmin(role: string): any {
    return role == 'ROLE_ADMIN';
  }

  async setAdmin(id: number) {
    if (window.confirm('Are You sure You want set ADMIN?')) {
      this.openProgressDialog();
      let response = await this.userService.setAdmin(id);
      response.subscribe(response => {
        this.loadUsers();
        this.dialogRefProgress.close();
        this.openSnackBar('User role changed', 'OK');
      }, err => {
        this.dialogRefProgress.close();
        console.log('error');
        this.openSnackBar('Cannot change user role - error', 'OK');
      })
    }
  }

  async setUser(id: number) {
    if (window.confirm('Are You sure You want set USER?')) {
      this.openProgressDialog();
      let response = await this.userService.setUser(id);
      response.subscribe(response => {
        this.loadUsers();
        this.dialogRefProgress.close();
        this.openSnackBar('User role changed', 'OK');
      }, err => {
        console.log('error');
        this.dialogRefProgress.close();
        this.openSnackBar('Cannot change user role - error', 'OK');
      })
    }
  }

  async delete(id: number) {
    if (window.confirm('Are You sure You want delete that user?')) {
      this.openProgressDialog();
      let response = await this.userService.deleteUser(id);
      response.subscribe(response => {
        this.loadUsers();
        this.dialogRefProgress.close();
        this.openSnackBar('User deleted successfuly', 'OK');
      }, err => {
        console.log('error');
        this.dialogRefProgress.close();
        this.openSnackBar('Cannot delete user - error', 'OK');
      })
    }
  }


  async loadUsers() {
    const users: UserData[] = [];
    let data = await this.userService.findAll();
    data.subscribe(res => {
      for (let user of res.json()) {
        users.push(createNewUser(user));
      }
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openProgressDialog() {
    this.dialogRefProgress = this.dialog.open(ProgressDialogComponent, {disableClose: true});
  }

}

function createNewUser(data): UserData {
  return {
    id: data.id,
    name: data.name,
    email: data.email,
    city: data.city,
    roleType: data.roleType
  };
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  city: string;
  roleType: string;
}
