export default class ClientDTO {
  constructor(client) {
      this.first_name = client.first_name;
      this.last_name  = client.last_name;
      this.celphone   = client.celphone;
      this.address    = client.address;
      this.city       = client.city;
      this.state      = client.state;
      this.email      = client.email;
      this.birthday   = client.birthday;
      this.lastupdate = Date();
    }

}