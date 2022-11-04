//interdit les NULL et UNDEFINED

class Drum {
    color?: 'Green' | 'Black' | 'White' | 'Red';

    paint(color: NonNullable<Drum['color']>){
        console.log();
    }
}

const fords = new Drum();
fords.paint("White");  //ok

