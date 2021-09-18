export class CourseComment {
          id: number
          userName: string
          contents: string
          email: string

          constructor(
                    id: number,
                    userName: string,
                    contents: string,
                    email: string
          ) {

                    this.id = id,
                              this.userName = userName,
                              this.contents = contents,
                              this.email = email

          }
}