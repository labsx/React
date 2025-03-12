<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Experiece extends Model
{
    protected $fillable = [
       'job_name',
       'user_id',
       'start_year',
       'end_year',
       'company_name',
    ];
}
