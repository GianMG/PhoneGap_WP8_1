﻿//-----------------------------------------------------------------------------
// Tile.js
//
// Inspired by the Microsoft XNA Community Game Platformer Sample
// Copyright (C) Microsoft Corporation. All rights reserved.
// Ported to HTML5 Canvas with EaselJS by David Rousset - http://blogs.msdn.com/davrous
//-----------------------------------------------------------------------------

/// <summary>
/// Controls the collision detection and response behavior of a tile.
/// </summary>
function Enum() { }

/// <summary>
/// A passable tile is one which does not hinder player motion at all.
/// </summary>
// Passable = 0,

/// <summary>
/// An impassable tile is one which does not allow the player to move through
/// it at all. It is completely solid.
/// </summary>
//  Impassable = 1,

/// <summary>
/// A platform tile is one which behaves like a passable tile except when the
/// player is above it. A player can jump up through a platform as well as move
/// past it to the left and right, but can not fall down through the top of it.
/// </summary>
// Platform = 2

Enum.TileCollision = { Passable: 0, Impassable: 1, Platform: 2 };

(function (window) {
    function Tile(texture, collision, x, y, scaleToFitX, scaleToFitY) {
        this.initialize(texture, collision, x, y, scaleToFitX, scaleToFitY);
    }
    Tile.prototype = new Bitmap();
    
      // constructor:
    Tile.prototype.Bitmap_initialize = Tile.prototype.initialize; //unique to avoid overiding base class

    Tile.prototype.initialize = function (texture, collision, x, y, scaleToFitX, scaleToFitY) {
        if (texture != null) {
            this.Bitmap_initialize(texture);
            this.empty = false;
        }
        else {
            this.empty = true;
        }
        this.Collision = collision;
        this.position = new Point(x, y);
        this.UpdateRatio(scaleToFitX, scaleToFitY);
    };

    Tile.prototype.UpdateRatio = function (scaleToFitX, scaleToFitY) {
        this.scaleToFitX = scaleToFitX;
        this.scaleToFitY = scaleToFitY;
        this.x = this.position.x * this.Width * this.scaleToFitX;
        this.y = this.position.y * this.Height * this.scaleToFitY;
        this.scaleX = this.scaleToFitX;
        this.scaleY = this.scaleToFitY;
    };

    Tile.prototype.Width = 40;
    Tile.prototype.Height = 32;

    window.Tile = Tile;
} (window));