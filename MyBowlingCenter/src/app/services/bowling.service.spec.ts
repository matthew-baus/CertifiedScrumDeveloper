import { TestBed } from '@angular/core/testing';

import { BowlingService } from './bowling.service';

describe('BowlingService', () => {
  let service: BowlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BowlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should equal 69', () => {
    
    const scores : number[] = [5,3,0,5,4,2,8,0,0,9,1,1,2,8,9,0,3,3,4,2]; //total = 69
    
    service.initDefaultGame(scores);
    
    expect(service.getTotalForGame()).toEqual(69);
  });

  it('should equal 2', () => {
    const scores : number[] = [5,3,0,5,4,2,8,0,0,9,1,1,2,8,9,0,3,3,4,2]; //total = 69

    service.initDefaultGame(scores);
    expect(service.getTotalForBall(9,1)).toEqual(2);
  });

  it('should equal 8', () => {
    const scores : number[] = [5,3,0,5,4,2,8,0,0,9,1,1,2,8,9,0,3,3,4,2]; //total = 69

    service.initDefaultGame(scores);
    expect(service.getTotalForFrame(3)).toEqual(8);
  });

  it('should equal 8', () => {
    const scores : number[] = [5,3,0,5,4,2,8,0,0,9,1,1,2,8,9,0,3,3,4,2]; //total = 69

    service.initDefaultGame(scores);
    expect(service.getTotalForTwoFrames(2,3)).toEqual(14);
  });
  
  // it('should initialize a default game with 10 frames'), () => {
    
  //   service.initDefaultGame();
    
  //   expect(service.game.length).toEqual(10);
  // };
});
