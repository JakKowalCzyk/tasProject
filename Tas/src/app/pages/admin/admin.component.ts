import {Component, OnInit} from "@angular/core";
import {UserService} from "../../services/user-service";
import {User} from "../../models/user";
import {MatTableDataSource} from "./table-data-source";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  displayedColumns = ['position', 'name', 'email', 'role', 'action'];

  dataSource: MatTableDataSource<UserData>;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.loadUsers();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  isAdmin(): any {
    return this.userService.isAdmin();
  }

  ngOnInit(): void {
  }

  async loadUsers() {
    const users: UserData[] = [];
    let data = await this.userService.findAll();
    data.subscribe(res => {
      for (let user of res.json()) {
        users.push(createNewUser(user));
      }
      this.dataSource = new MatTableDataSource(users);
      console.log(this.dataSource)
    });
    console.log(users);
    console.log(this.dataSource)
  }

}

function createNewUser(data): UserData {
  return {
    id: data.id,
    name: data.name,
    email: data.email,
    roleType: data.roleType
  };
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  roleType: string;
}
