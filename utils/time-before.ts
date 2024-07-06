import { da } from "@faker-js/faker"

export function timeBefore(date: string): string {
  const now = new Date()
  const diffMillis = now.getTime() - new Date(date).getTime()

  const secsDiff = Math.floor(diffMillis / 1000)
  const minsDiff = Math.floor(secsDiff / 60)
  const hoursDiff = Math.floor(minsDiff / 60)
  const daysDiff = Math.floor(hoursDiff / 24)
  if(secsDiff < 60) {
    return secsDiff + "s";
  } else if (minsDiff < 60) {
    return minsDiff + "min";
  }  else if (hoursDiff < 24) {
    return hoursDiff + "h";
  }  else if (daysDiff === 1) {
    return "Yesterday";
  } else {
      return daysDiff + "days";
  }
}