<?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Replace contact@example.com with your real receiving email address
  $receiving_email_address = 'contact@example.com';

  if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
    include( $php_email_form );
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }

  $connect_with_tsc= new PHP_Email_Form;
  $connect_with_tsc->ajax = true;
  
  $connect_with_tsc->to = $receiving_email_address;
  $connect_with_tsc->from_name = $_POST['name'];
  $connect_with_tsc->from_email = $_POST['email'];
  $connect_with_tsc->subject = "New table booking request from the website";

  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
  /*
  $connect_with_tsc->smtp = array(
    'host' => 'example.com',
    'username' => 'example',
    'password' => 'pass',
    'port' => '587'
  );
  */

  $connect_with_tsc->add_message( $_POST['name'], 'Name');
  $connect_with_tsc->add_message( $_POST['email'], 'Email');
  $connect_with_tsc->add_message( $_POST['phone'], 'Phone', 4);
  $connect_with_tsc->add_message( $_POST['date'], 'Date', 4);
  $connect_with_tsc->add_message( $_POST['time'], 'Time', 4);
  $connect_with_tsc->add_message( $_POST['people'], '# of people', 1);
  $connect_with_tsc->add_message( $_POST['message'], 'Message');

  echo $connect_with_tsc->send();
?>
