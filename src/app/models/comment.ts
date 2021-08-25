export class CourseComment {
          id: number
          userName: string
          contents: string
          date: string 

          constructor(
                    id: number,
                    userName: string,
                    contents: string,
                    date: string) {

                    this.id = id,
                    this.userName = userName,
                    this.contents = contents,
                    this.date = date
          }
}