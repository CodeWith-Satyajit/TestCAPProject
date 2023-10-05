using { BookShop.db as db } from '../db/datamodel';

service MyService {
  
    entity  Test as projection on db.Test;
 


}