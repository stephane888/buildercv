<?php

namespace Drupal\buildercv;

use Drupal\Core\Entity\EntityAccessControlHandler;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Access\AccessResult;

/**
 * Access controller for the Model cv entity.
 *
 * @see \Drupal\buildercv\Entity\ModelCv.
 */
class ModelCvAccessControlHandler extends EntityAccessControlHandler {
  
  /**
   *
   * {@inheritdoc}
   */
  protected function checkAccess(EntityInterface $entity, $operation, AccountInterface $account) {
    /** @var \Drupal\buildercv\Entity\ModelCvInterface $entity */
    switch ($operation) {
      
      case 'view':
        
        if (!$entity->isPublished()) {
          return AccessResult::allowedIfHasPermission($account, 'view unpublished model cv entities');
        }
        
        return AccessResult::allowedIfHasPermission($account, 'view published model cv entities');
      
      case 'update':
        if ($entity->getOwnerId() == $account->id()) {
          return AccessResult::allowed();
        }
        return AccessResult::allowedIfHasPermission($account, 'edit model cv entities');
      
      case 'delete':
        
        return AccessResult::allowedIfHasPermission($account, 'delete model cv entities');
    }
    
    // Unknown operation, no opinion.
    return AccessResult::neutral();
  }
  
  /**
   *
   * {@inheritdoc}
   */
  protected function checkCreateAccess(AccountInterface $account, array $context, $entity_bundle = NULL) {
    return AccessResult::allowedIfHasPermission($account, 'add model cv entities');
  }
  
}
