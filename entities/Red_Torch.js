export class Goblins {
    rangeX = 0
    rangeY = 800
  
    constructor(positions, amplitudes, velocities, type, summon) {
      this.amplitudes = amplitudes
      this.velocities = velocities
      this.goblins = []

      if(summon === true){
        this.goblins.push(
          add([
            sprite(`red_torch-${type}`, { anim: "walk" }), // need a sprite
            pos(position),
            area({
              shape: new Rect(vec2(0, 4.5), 20, 6),
              collisionIgnore: ["goblins"],
            }),
            anchor("center"),
            body(),
            scale(4),
            state("idle", ["idle", "walk-left", "walk-right", "attack-1", "attack-2", "attack-3", "attack-4", "knocked-back"]),
            offscreen(),
            "goblins",
            "p1"
          ])
        )
      }
    }
  
    async walk(goblin, moveBy, duration) {
      if (goblin.currAnim !== "walk") goblin.play("walk")
  
      await tween(
        goblin.pos.x,
        goblin.pos.x + moveBy,
        duration,
        (posX) => (goblin.pos.x = posX),
        easings.easeOutSine
      )
    }
  
    startMovement() {
      let goblin_speed = 100;
      action('goblins', (g) => {
        g.move(speed, 0);
      })

      collides('goblins', !'p1', async (g) => {
        await new Promise(() => {
          setTimeout(() => {
            g.enterState("idle");
          }, 300)
        });

        await new Promise(() => {
          setTimeout(() => {
            g.enterState("attack-1");
          }, 300)
        });

        await new Promise(() => {
          setTimeout(() => {
            g.enterState("attack-2");
            
          }, 300)
        });

        await new Promise(() => {
          setTimeout(() => {
            g.enterState("attack-3");
          }, 300)
        });

        await new Promise(() => {
          setTimeout(() => {
            g.enterState("attack-4");
          }, 300)
        });


      })
    }

    // if(goblin.currAnim !== "walk-right") {
    //   goblin.enterState("walk-right");
    // }
    setMovementPattern() {
      for (const [index, goblin] of this.goblins.entries()) {
        const idle = goblin.onStateEnter("idle", async (previousState) => {
          // if (goblin.currAnim !== "idle") goblin.play("idle")
  
          // await new Promise((resolve) => {
          //   setTimeout(() => resolve(), 1000)
          // })
  
          if (previousState != "walk-right") {
            goblin.enterState("walk-right")
          } 
          else {
            // if (!goblin.isOffScreen()) {
            //   play("spider-attack", { volume: 0.6 }) // play spider attacking sound
            // }
  
            if(!goblin.isOffScreen()){
              await new Promise(() => {
                setTimeout(() => {
                  goblin.enterState("idle");
                }, 300)
              });

              await new Promise(() => {
                setTimeout(() => {
                  goblin.enterState("attack-1");
                }, 300)
              });

              await new Promise(() => {
                setTimeout(() => {
                  goblin.enterState("attack-2");
                }, 300)
              });

              await new Promise(() => {
                setTimeout(() => {
                  goblin.enterState("attack-3");
                }, 300)
              });

              await new Promise(() => {
                setTimeout(() => {
                  goblin.enterState("attack-4")
                }, 300)
              });
            }
          }
        })
  
        const walkRight = goblin.onStateEnter("walk-Right", async () => {
            goblin.flipX = false
  
          await this.crawl(
            goblin,
            this.amplitudes[index],
            this.velocities[index]
          )
          goblin.enterState("idle", "walk-right")
        })
  
        const crawlRight = goblin.onStateEnter("crawl-right", async () => {
            goblin.flipX = true
  
          await this.crawl(goblin, this.amplitudes[index], this.velocities[index])
          goblin.enterState("idle", "crawl-right")
        })
  
        onSceneLeave(() => {
          idle.cancel()
          crawlLeft.cancel()
          crawlRight.cancel()
        })
      }
    }
  
    enablePassthrough() {
      for (const goblin of this.goblins) {
        goblin.onBeforePhysicsResolve((collision) => {
          if (collision.target.is("passthrough") && goblin.isJumping()) {
            collision.preventResolution()
          }
        })
      }
    }
  }
  