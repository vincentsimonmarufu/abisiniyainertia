<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RidesController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})
    ->name('dashboard');
//    ->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/uikit/button', function () {
    return Inertia::render('main/uikit/button/page');
})->name('button');

// rides
Route::get('/rides', [RidesController::class, 'index'])->name('rides.index');
Route::get('/rides/create', [RidesController::class, 'create'])->name('rides.create');
Route::post('/rides', [RidesController::class, 'store'])->name('rides.store');
Route::get('/rides/{ride}/edit', [RidesController::class, 'edit'])->name('rides.edit');
Route::put('/rides/{ride}', [RidesController::class, 'update'])->name('rides.update');
Route::delete('/rides/{ride}', [RidesController::class, 'destroy'])->name('rides.destroy');

require __DIR__ . '/auth.php';
