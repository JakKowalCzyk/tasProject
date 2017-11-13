import {Component, OnInit, ViewChild} from "@angular/core";
import {UserService} from "../../services/user-service";
import {MatTableDataSource} from "./table-data-source";
import {MatPaginator} from "@angular/material";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  displayedColumns = ['name', 'email', 'roleType', 'action', 'delete'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private userService: UserService) {
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
    }, err => {
      console.log('error')
    })
  }

  async setUser(id: number) {
    let response = await this.userService.setUser(id);
    response.subscribe(response => {
      this.loadUsers();
    }, err => {
      console.log('error')
    })
  }

  async delete(id: number) {
    if (window.confirm('Are You sure You want delete that user?')) {
      let response = await this.userService.deleteUser(id);
      response.subscribe(response => {
        this.loadUsers();
      }, err => {
        console.log('error')
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
