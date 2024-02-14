const canvas = document.getElementById("Canvas");
const ctx = canvas.getContext("2d");
i = 0
j = 0
SelectedPiece = 0
Redrawing = false

ctx.fillRect(0, 0, 1000, 800)

function OnClick(e){
    if (SelectedPiece == 0) {
        MouseLocation = [(((e.clientX-8)-(e.clientX-8)%100)/100)+1,(((e.clientY-8)-(e.clientY-8)%100)/100)+1]
        for (let i = 0; i < Pieces.length; i++) {
            const piece = Pieces[i]
            if (piece.PieceLocation[0] == MouseLocation[0] && piece.PieceLocation[1] == MouseLocation[1]) {
                SelectedPiece = piece
            }
        }
    } else {
        MouseLocation = [(((e.clientX-8)-(e.clientX-8)%100)/100)+1,(((e.clientY-8)-(e.clientY-8)%100)/100)+1]
        DoNotMove = false
        for (let i = 0; i < Pieces.length; i++) {
            const piece = Pieces[i]
            if (piece.PieceLocation[0] == MouseLocation[0] && piece.PieceLocation[1] == MouseLocation[1] && piece.Color != SelectedPiece.Color) {
                Pieces.splice(i, 1)
            } else {
                if (piece.PieceLocation[0] == MouseLocation[0] && piece.PieceLocation[1] == MouseLocation[1] && piece.Color == SelectedPiece.Color) DoNotMove = true
            }
        }
        if (!DoNotMove) SelectedPiece.PieceLocation = MouseLocation
        Redrawing = true
        SelectedPiece = 0
        update()
    }
}

canvas.addEventListener("click", OnClick)

function ChessPiece(PieceLocation, Piece, Color) {
    this.PieceLocation = PieceLocation
    this.Piece = Piece
    this.Color = Color
    this.Image = new Image()
    this.Image.src = 'Assets/' + this.Piece + this.Color +'.png'
}

Pawn1 = new ChessPiece([1, 2], "Pawn", "Black")
Pawn2 = new ChessPiece([2, 2], "Pawn", "Black")
Pawn3 = new ChessPiece([3, 2], "Pawn", "Black")
Pawn4 = new ChessPiece([4, 2], "Pawn", "Black")
Pawn5 = new ChessPiece([5, 2], "Pawn", "Black")
Pawn6 = new ChessPiece([6, 2], "Pawn", "Black")
Pawn7 = new ChessPiece([7, 2], "Pawn", "Black")
Pawn8 = new ChessPiece([8, 2], "Pawn", "Black")
Pawn9 = new ChessPiece([1, 7], "Pawn", "White")
Pawn10 = new ChessPiece([2, 7], "Pawn", "White")
Pawn11 = new ChessPiece([3, 7], "Pawn", "White")
Pawn12 = new ChessPiece([4, 7], "Pawn", "White")
Pawn13 = new ChessPiece([5, 7], "Pawn", "White")
Pawn14 = new ChessPiece([6, 7], "Pawn", "White")
Pawn15 = new ChessPiece([7, 7], "Pawn", "White")
Pawn16 = new ChessPiece([8, 7], "Pawn", "White")
Rook1 = new ChessPiece([1, 1], "Rook", "Black")
Rook2 = new ChessPiece([8, 1], "Rook", "Black")
Rook3 = new ChessPiece([1, 8], "Rook", "White")
Rook4 = new ChessPiece([8, 8], "Rook", "White")
Knight1 = new ChessPiece([2, 1], "Knight", "Black")
Knight2 = new ChessPiece([7, 1], "Knight", "Black")
Knight3 = new ChessPiece([2, 8], "Knight", "White")
Knight4 = new ChessPiece([7, 8], "Knight", "White")
Bishop1 = new ChessPiece([3, 1], "Bishop", "Black")
Bishop2 = new ChessPiece([6, 1], "Bishop", "Black")
Bishop3 = new ChessPiece([3, 8], "Bishop", "White")
Bishop4 = new ChessPiece([6, 8], "Bishop", "White")
Queen1 = new ChessPiece([4, 1], "Queen", "Black")
Queen2 = new ChessPiece([4, 8], "Queen", "White")
King1 = new ChessPiece([5, 1], "King", "Black")
King2 = new ChessPiece([5, 8], "King", "White")


Pieces = [Pawn1, Pawn2, Pawn3, Pawn4, Pawn5, Pawn6, Pawn7, Pawn8, Pawn9, Pawn10, Pawn11, Pawn12, Pawn13, Pawn14, Pawn15, Pawn16, Rook1, Rook2, Rook3, Rook4, Knight1, Knight2, Knight3, Knight4, Bishop1, Bishop2, Bishop3, Bishop4, Queen1, Queen2, King1, King2]

function update(){  

    while (i < 8) {
        j = 0
        while (j < 8) {
            ctx.fillStyle = "ForestGreen"
            if (i % 2 == 0 && j % 2 == 0 || i % 2 != 0 && j % 2 != 0) [ctx.fillRect(i*100, j*100, 100, 100)]
            ctx.fillStyle = "white"
            if (i % 2 == 0 && j % 2 != 0 || i % 2 != 0 && j % 2 == 0) [ctx.fillRect(i*100, j*100, 100, 100)]
            j += 1
        }
        i += 1
    }

    i = 0
    while (i < Pieces.length) {
        let piece2 = Pieces[i]
        if (Redrawing) ctx.drawImage(piece2.Image, (piece2.PieceLocation[0] - 1) * 100, (piece2.PieceLocation[1] - 1) * 100)
        piece2.Image.onload = function(){
            ctx.drawImage(piece2.Image, (piece2.PieceLocation[0] - 1) * 100, (piece2.PieceLocation[1] - 1) * 100)
        }
        i += 1
    }
    i = 0
    j = 0

}
update()
