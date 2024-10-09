<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rides extends Model
{
    use HasFactory;

    protected $fillable = ['route_name', 'bus_name', 'departure_time', 'departure_date'];
}
