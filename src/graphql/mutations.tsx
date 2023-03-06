import { gql } from 'graphql-request';

export const NEW_SCHEDULER = gql`
mutation NEW_SCHEDULER(
  $date:DateTime
  $name:String
  $email:String
  $smartphoneNumber:String
  $service:String
  $publish:DateTime
  ){
  createScheduler(
    data:{
      Date:$date
      Name:$name
      Email:$email
      SmartphoneNumber:$smartphoneNumber
      Service:$service
      publishedAt:$publish
    }
  ){
    data{
      attributes{
        Date
        Name
        Email
        SmartphoneNumber
        Service
        publishedAt
      }
    }
  }
}
`;
