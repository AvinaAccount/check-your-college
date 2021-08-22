export class Comment {

          id: number
          userName: string
          // date:Date
          contents: string

          constructor(id: number, userName: string, contents: string) {
                    this.id = id,
                              this.userName = userName,
                              this.contents = contents
          }
}