interface AppointmentProps {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

export class Appointment {
  private props: AppointmentProps;

  get customer() {
    return this.props.customer;
  }
  get endsAt() {
    return this.props.endsAt;
  }
  get startsAt() {
    return this.props.startsAt;
  }

  constructor(props: AppointmentProps) {
    this.props = props;
  }
  
}