export enum RequestStatus {
  Placed = "Placed",
  Sent = "Sent",
  HasAnswers = "Has answers",
  Concluded = "Concluded",
  Canceled = "Canceled",
}

export function requestStatus(code: number): RequestStatus {
  return [
    RequestStatus.Placed,
    RequestStatus.Sent,
    RequestStatus.HasAnswers,
    RequestStatus.Concluded,
    RequestStatus.Canceled,
  ][code]
}
