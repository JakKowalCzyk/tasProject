import {Component, OnInit, ViewChild} from "@angular/core";
import {UserService} from "../../services/user-service";
import {MatTableDataSource} from "./table-data-source";
import {MatPaginator, MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  displayedColumns = ['name', 'email', 'roleType', 'action', 'delete'];
  displayedColumnsMobile = ['user', 'action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private userService: UserService,
              public snackBar: MatSnackBar) {
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
    let response = await this.userService.setAdmin(id);
    response.subscribe(response => {
      this.loadUsers();
      this.openSnackBar('User role changed', 'OK');
    }, err => {
      console.log('error');
      this.openSnackBar('Cannot change user role - error', 'OK');
    })
  }

  async setUser(id: number) {
    let response = await this.userService.setUser(id);
    response.subscribe(response => {
      this.loadUsers();
      this.openSnackBar('User role changed', 'OK');
    }, err => {
      console.log('error');
      this.openSnackBar('Cannot change user role - error', 'OK');
    })
  }

  async delete(id: number) {
    if (window.confirm('Are You sure You want delete that user?')) {
      let response = await this.userService.deleteUser(id);
      response.subscribe(response => {
        this.loadUsers();
        this.openSnackBar('User deleted successfuly', 'OK');
      }, err => {
        console.log('error');
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
